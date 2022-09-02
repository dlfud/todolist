import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdModeEditOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import axios from "axios";

const TodoListItem = ({ todo, setTodos, index }) => {
  const { id, content, checked } = todo;
  return (
    <tr>
      <th>{id}</th>
      <td>{content}</td>
      <td>
        <div
          onClick={async () => {
            // setTodos((todos) =>
            //   todos.map((todo, index) =>
            //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
            //   )
            // );
            const data = await axios({
              url: `http://localhost:8083/todos/${id}`,
              method: "PATCH",
            });
            setTodos(data.data);
          }}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
      </td>
      <td className="edit">
        <div>
          <label for="my-modal-5" class="modal-button"><MdModeEditOutline /></label>
          <input type="checkbox" id="my-modal-5" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box w-11/12 max-w-5xl">
              <h3 class="font-bold text-lg">수정할 내용을 입력하세요</h3>
              <input type="text"/>
              <div class="modal-action">
                <label for="my-modal-5" class="btn">Yay!</label>
              </div>
            </div>
          </div>
          
        </div>
      </td>
      <td className="remove">
        <div
          onClick={async () => {
            // setTodos((todos) => todos.filter((todo) => todo.id !== id));
            const data = await axios({
              url: `http://localhost:8083/todos/${id}`,
              method: "DELETE",
            });
            setTodos(data.data);
          }}
        >
          <MdRemoveCircleOutline />
        </div>
      </td>
    </tr>
  );
};

export default TodoListItem;
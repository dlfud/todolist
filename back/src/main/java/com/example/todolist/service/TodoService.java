package com.example.todolist.service;

import com.example.todolist.dao.TodoRepository;
import com.example.todolist.domain.Todo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoRepository todoRepository;

    public Todo createTodo(Todo todo){
        Todo newTodo = new Todo();
        newTodo.setContent(todo.getContent());
        newTodo.setChecked(false);
        todoRepository.save(newTodo);
        return newTodo;
    }

    public List<Todo> getTodos(){
        return todoRepository.findAll();
    }
}

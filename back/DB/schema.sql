DROP DATABASE IF EXISTS todolist;
CREATE DATABASE todolist;
USE todolist;

CREATE TABLE todo(
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(200) NOT NULL,
    checked TINYINT(1) DEFAULT 1
);

INSERT INTO todo SET
content = "학원가서 낮잠자기";

INSERT INTO todo SET
content = "소망님께 9월 상납금 내기",
checked=0;

SELECT * FROM todo;
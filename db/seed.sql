CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department {
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL
};

CREATE TABLE role {
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  FOREIGN KEY departmentid REFERENCES deparment(id)
};

CREATE TABLE employee {
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  FOREIGN KEY role_id REFERENCES role(id) NOT NULL,
  FOREIGN KEY manager_id REFERENCES employee(id)
};
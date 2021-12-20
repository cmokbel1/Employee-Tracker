-- sample data for display purposes
USE employees_db;
INSERT INTO department(name)
VALUES
('Human Resources'),
('IT')
('Marketing')
('Finance')
('Management')
;

 USE employees_db;
INSERT INTO roles(title, salary, department_id)
VALUES 
('Resourcer', 60000, 1)
('Developer', 75000, 2),
('Marketer', 95000, 3),
('Financeer', 100000,4),
('Senior Resourcer', 95000, 1)
('Senior Developer', 130000, 2),
('Senior Marketer', 145000, 3),
('Senior Financeer', 200000, 4),
('Director', 360000, 1),
('Director', 360000, 2),
('Director', 360000, 3),
('Director', 360000, 4),
('CEO', 550000, 5)
;



USE employees_db;
INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES 
('John', 'Doe', 1, 2 ),
('Jane','Doe',5),
('Oliver', 'Hoang', 2, 4), 
('Peter', 'Song',6 ), 
('Malia', 'Pringle',9, 6 ), 
('Claude', 'Mokbel',13), 
('Haoyang', 'lastName', 10, 6 ),
('Micheal', 'Scharf', 12, 6)
 ;
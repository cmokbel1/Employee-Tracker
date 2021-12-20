var inquirer = require('inquirer');
const { prompt } = require('inquirer');
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ElsaRoseyButterScotch',
  database: 'employees_db'
});
const consoleTable = require('console.table');
const util = require('util')

const start = () => {
  inquirer.prompt(
   [
    {
     type: 'list',
      name: 'todo',
      message: 'Employee Tracher Application, What Would You Like To Do?',
      choices: ['Add Department(s)', 'Add Role(s)', 'Add Employee(s)', 'View Departments', 'View Roles', 'View Employees', 'Update Employee Roles', 'Update Employee Manager(s)', 'View Employees By Manager', 'Delete Department(s)', 'Delete Role(s)', 'Delete Employee(s)', 'View Total Budget', 'End']
    }
  ])
    .then((answers) => {
     switch (answers.todo) {
        case 'Add Department(s)':
          console.log(answers.todo)
          // addDepartment();
          break;
       case 'Add Role(s)':
         console.log(answers.todo)
          // addRoles();
          break;
        case 'Add Employee(s)':
         console.log(answers.todo)
          // addEmployees();
          break;
        case 'View Departments':
         console.log(answers.todo)
          viewDepartments();
          break;
       case 'View Roles':
         console.log(answers.todo)
          viewRoles();
         break;
       case 'View Employees':
         console.log(answers.todo)
          viewEmployees();
          break;
       case 'Update Employee Roles':
         console.log(answers.todo)
        //  updateEmployeeRoles();
         break;
       case 'Update Employee Manager(s)':
         console.log(answers.todo)
        //  updateEmployeeManagers();
         break;
       case 'View Employees By Manager':
         console.log(answers.todo)
        viewEmployeeByManager();
        console.log('it worked')
         break;
       case 'Delete Department(s)':
         console.log(answers.todo)
        //  deleteDepartments();
         break;
        case 'Delete Role(s)':
         console.log(answers.todo)
        //  deleteRoles();
         break;
       case 'Delete Employee(s)':
         console.log(answers.todo)
        //  deleteEmployees();
         break;
        case 'View Total Budget':
         console.log(answers.todo)
        //  viewBudget();
         break;
         case 'End':
           console.log(answers.todo)
          // end()
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log('Prompt could not be rendered')
      } else {
        console.log(error)
      }
    });
}

start();

// ADD FUNCTIONS 

// function addDepartment() {
//   db.query(DEEEZNUIs)
// }

// VIEW FUNCTIONS 
function viewDepartments() {
  db.query('SELECT * FROM department', (err, departments) => {
    if (err) { console.log(err) }
    console.table(departments)
    start()
  })
}

function viewEmployees() {
  db.query('SELECT * FROM employee', (err, employees) => {
    if (err) { console.log(err) }
    console.table(employees)
    start()
  })
}

function viewRoles() {
  db.query('SELECT * FROM roles', (err, roles) => {
    if (err) { console.log(err) }
    console.table(roles)
    start()
  })
}

function viewEmployeeByManager() {
  inquirer.prompt({
      type:'list',
      name:'managers',
      message:'Select a Manager',
      choices: [db.query('SELECT * from employee WHERE id = manager_id', (err, managers) => {
        if (err) { console.log(err) }
        console.table(managers)
      })]
    }).then((answer) => {
      if (err) { console.log(err) }
      console.table(db.query('SELECT id  FROM employee WHERE  manager_id', (err, empByMgr) => {
      if (err) { console.log(err) } console.table(empByMgr)
    }))
    // console.table(empByMgr)
  
  })
  start()
}
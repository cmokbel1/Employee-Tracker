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
          addDepartment();
          break;
       case 'Add Role(s)':
          // addRoles();
          break;
        case 'Add Employee(s)':
          // addEmployees();
          break;
        case 'View Departments':
          viewDepartments();
          break;
       case 'View Roles':
          viewRoles();
         break;
       case 'View Employees':
          viewEmployees();
          break;
       case 'Update Employee Roles':
        //  updateEmployeeRoles();
         break;
       case 'Update Employee Manager(s)':
        //  updateEmployeeManagers();
         break;
       case 'View Employees By Manager':
        viewEmployeeByManager();
        console.log('it worked')
         break;
       case 'Delete Department(s)':
        //  deleteDepartments();
         break;
        case 'Delete Role(s)':
        //  deleteRoles();
         break;
       case 'Delete Employee(s)':
        //  deleteEmployees();
         break;
        case 'View Total Budget':
        //  viewBudget();
         break;
         case 'End':

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

function addDepartment() {
  inquirer.prompt([
    {
      type:'input',
      name:'name',
      message:'Enter Department Name:'
    }
  ])
  .then((newDepartment => {
    db.query('INSERT INTO department SET ?', newDepartment, err => {
      if (err) { console.log(err) }
      console.log('New Department Added')
      start()
    })
  }))
}

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
      console.table(db.query('SELECT id  FROM employee WHERE  manager_id', (err, empByMgr) => {
      if (err) { console.log(err) } console.table(empByMgr)
    }))
    // console.table(empByMgr)
  
  })
  start()
}
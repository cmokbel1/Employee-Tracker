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
          addRoles();
          break;
        case 'Add Employee(s)':
          addEmployees();
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
        // viewEmployeeByManager();
        console.log('Work in Progress')
        start()
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
  .then(newDepartment => {
    db.query('INSERT INTO department SET ?', newDepartment, err => {
      if (err) { console.log(err) }
      console.log('New Department Added')
      start()
    })
  })
}


function addRoles() {
  db.query('SELECT * FROM department', (err, departments) => {
    if (err) { console.log(err) }
    console.log('---AVAILABLE DEPARTMENTS---')
    console.table(departments)
    console.log('---AVAILABLE DEPARTMENTS---')
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter Role Title: '
    },
    {
      type: 'number',
      name: 'salary',
      message: 'Enter Salary: '
    },
    {
      type: 'number',
      name: 'department_id',
      message: 'Enter Department ID: '
    }
    ])
    .then(newRole => {
      db.query('INSERT INTO roles SET ?', newRole, err => {
        if (err) { console.log(err) }
        console.log('New Role Added')
        start()
      })
    })
  })
}
function addEmployees() {
  db.query('SELECT * FROM employee WHERE (id in (SELECT manager_id FROM employee))', (err, managers) => {
    if (err) { console.log(err) }
    console.log('---CURRENT MANAGERS---')
    console.table(managers)
    console.log('---CURRENT MANAGERS---')
  inquirer.prompt([
    {
      type:'input',
      name:'first_name',
      message: 'Enter First Name: '
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter Last Name: '
    },
    {
      type: 'number',
      name:'roles_id',
      message: 'Enter Role ID: '
    },
    {
      type:'number',
      name:'manager_id',
      message: 'Enter Manager ID: '
    }
  ])
    .then(newEmployee => {
      db.query('INSERT INTO employee SET ?', newEmployee, err => {
        if (err) { console.log(err) }
        console.log('New Employee Added')
        start()
      })
    })
 })
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

// function viewEmployeeByManager() {
//   inquirer.prompt({
//       type:'list',
//       name:'managers',
//       message:'Select a Manager',
//       choices: [db.query('SELECT * from employee WHERE id = manager_id', (err, managers) => {
//         if (err) { console.log(err) }
//         console.table(managers)
//       })]
//     }).then((answer) => {
//       console.table(db.query('SELECT id  FROM employee WHERE  manager_id', (err, empByMgr) => {
//       if (err) { console.log(err) } console.table(empByMgr)
//     }))
//     // console.table(empByMgr)
  
//   })
//   start()
// }

// UPDATE FUNCTIONS

function updateEmployeeRoles() {
  db.query('')
}
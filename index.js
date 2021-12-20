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
         updateEmployeeRoles();
         break;
       case 'Update Employee Manager(s)':
        updateEmployeeManagers();
         break;
       case 'View Employees By Manager':
        // viewEmployeeByManager();
        console.log('----------------')
        console.log('----------------')
        console.log('Work in Progress')
        console.log('----------------')
        console.log('----------------')
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
    console.log('---------------------------')
    console.log('---AVAILABLE DEPARTMENTS---')
    console.log('---------------------------')
    console.log('')
    console.log('')
    console.table(departments)
    console.log('')
    console.log('')
    console.log('---------------------------')
    console.log('---AVAILABLE DEPARTMENTS---')
    console.log('---------------------------')
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
  db.query('SELECT id, first_name, last_name, manager_id FROM employee WHERE (id in (SELECT manager_id FROM employee))', (err, managers) => {
    if (err) { console.log(err) }
    console.log('------------CURRENT MANAGERS------------')
    console.log('----INSERT EMPLOYEE ID AS MANAGER ID----')
    console.log('------------CURRENT MANAGERS------------')
    console.log('')
    console.log('')
    console.table(managers)
    console.log('')
    console.log('')
    console.log('------------CURRENT MANAGERS------------')
    console.log('----INSERT EMPLOYEE ID AS MANAGER ID----')
    console.log('------------CURRENT MANAGERS------------')
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
    console.log('---------------------------------')
    console.log('-----------DEPARTMENTS-----------')
    console.log('---------------------------------')
    console.log('')
    console.log('')
    console.table(departments)
    console.log('')
    console.log('')
    console.log('---------------------------------')
    console.log('-----------DEPARTMENTS-----------')
    console.log('---------------------------------')

    start()
  })
}

function viewEmployees() {
  db.query('SELECT * FROM employee', (err, employees) => {
    if (err) { console.log(err) }
    console.log('----------------------------------')
    console.log('-------------EMPLOYEES-----------')
    console.log('----------------------------------')
    console.log('')
    console.log('')
    console.table(employees)
    console.log('')
    console.log('')
    console.log('---------------------------------')
    console.log('------------EMPLOYEES------------')
    console.log('---------------------------------')
    start()
  })
}

function viewRoles() {
  db.query('SELECT * FROM roles', (err, roles) => {
    if (err) { console.log(err) }
    console.log('-------------------------------------')
    console.log('----------------ROLES----------------')
    console.log('-------------------------------------')
    console.log('')
    console.log('')
    console.table(roles)
    console.log('')
    console.log('')
    console.log('--------------------------------------')
    console.log('----------------ROLES-----------------')
    console.log('--------------------------------------')
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
  db.query('SELECT * FROM employee', (err, employees) => {
    if (err) { console.log(err) }
    console.log('---------------------------')
    console.log('----AVAILABLE EMPLOYEES----')
    console.log('---------------------------')
    console.log('')
    console.table(employees)
    console.log('')
    console.log('---------------------------')
    console.log('----AVAILABLE EMPLOYEES----')
    console.log('---------------------------')
    db.query('SELECT * FROM roles', (err, roles) => {
      if (err) { console.log(err) }
      console.log('---------------------------')
      console.log('------AVAILABLE ROLES------')
      console.log('---------------------------')
      console.log('')
      console.table(roles)
      console.log('')
      console.log('---------------------------')
      console.log('------AVAILABLE ROLES------')
      console.log('---------------------------')
    inquirer.prompt([
      {
        type: 'input',
        name:'id',
        message:'Input Employee ID: '
      },
      {
        type:'input',
        name:'roles_id',
        message: 'New Role ID: '
      }
    ])
    .then(updateRole => {
      db.query('UPDATE employee SET ? WHERE ?', [{ roles_id: updateRole.roles_id }, { id:updateRole.id }],() => {
        console.log('~~~~~~~~~~~~~~~~~~~~~~')
        console.log('~~~~~~~~~~~~~~~~~~~~~~')
        console.log('Employee Role Updated!')
        console.log('~~~~~~~~~~~~~~~~~~~~~~')
        console.log('~~~~~~~~~~~~~~~~~~~~~~')
        console.log('')
        console.log('')
        start();
      })
    })
  })
 })
}

function updateEmployeeManagers() {
  db.query('SELECT * FROM employee', (err, employees) => {
    if (err) { console.log(err) }
    console.log('---------------------------')
    console.log('----AVAILABLE EMPLOYEES----')
    console.log('---------------------------')
    console.log('')
    console.table(employees)
    console.log('')
    console.log('---------------------------')
    console.log('----AVAILABLE EMPLOYEES----')
    console.log('---------------------------')
  db.query('SELECT id, first_name, last_name FROM employee WHERE (id in (SELECT manager_id FROM employee))', (err, managers) => {
   if (err) { console.log(err) }
   console.log('------------CURRENT MANAGERS------------')
   console.log('----INSERT EMPLOYEE ID AS MANAGER ID----')
   console.log('------------CURRENT MANAGERS------------')
   console.log('')
   console.log('')
   console.table(managers)
   console.log('')
   console.log('')
   console.log('------------CURRENT MANAGERS------------')
   console.log('----INSERT EMPLOYEE ID AS MANAGER ID----')
   console.log('------------CURRENT MANAGERS------------')
   console.log('')
   console.log('')
      inquirer.prompt([
        {
          type: 'input',
          name: 'id',
          message: 'Input Employee ID: '
        },
        {
          type: 'input',
          name: 'manager_id',
          message: 'New Manager ID: '
        }
      ])
        .then(updateManager => {
          db.query('UPDATE employee SET ? WHERE ?', [{ manager_id: updateManager.manager_id }, { id: updateManager.id }], () => {
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
            console.log('Employee Manager Updated!')
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
            console.log('')
            console.log('')
            start();
          })
        })
    })
  })
}
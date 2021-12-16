var inquirer = require('inquirer');

const mysql = require('mysql2')
const db = mysql.createConnection('mysql://root:ElsaRoseyButterScotch@localhost:3306/employees_db')


inquirer.prompt(
  [{
    type: 'list',
    name: 'todo',
    message:'What would you like to do?'
    choices:['Add Department(s)','Add Role(s)','Add Employee(s)', 'View Departments', 'View Roles', 'View Employees','Update Employee Roles', 'Update Employee Manager(s)', 'View Employees By Manager', 'Delete Department(s)', 'Delete Role(s)', 'Delete Employee(s)', 'View Total Budget']
  }]
)
.then((answers) => {
  db.query()
})
  .catch((error) => {
    if (error.isTtyError) {
      console.log('Prompt could not be rendered')
    } else {
      console.log(error)
    }
  });


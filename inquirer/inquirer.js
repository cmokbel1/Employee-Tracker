var inquirer = require('inquirer');

inquirer.prompt(
  [{
    type: 'list',
    name: 'todo',
    message:'What would you like to do?'
    choices:['Add Department(s)','Add Role(s)','Add Employee(s)', 'View Departments', 'View Roles', 'View Employees','Update Employee Roles', 'Update Employee Manager(s)', 'View Employees By Manager', 'Delete Department(s)', 'Delete Role(s)', 'Delete Employee(s)', 'View Total Budget']
  }]
)
.then((answers) => {

})
  .catch((error) => {
    if (error.isTtyError) {
      console.log('Prompt could not be rendered')
    } else {
      console.log(error)
    }
  });
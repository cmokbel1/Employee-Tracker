var inquirer = require('inquirer');
const mysql = require('mysql2')
const db = mysql.createConnection('mysql://root:ElsaRoseyButterScotch@localhost:3306/employees_db')

inquirer.prompt(
  [{
    type: 'list',
    name: 'todo',
    message: 'What would you like to do?'
    choices: ['Add Department(s)', 'Add Role(s)', 'Add Employee(s)', 'View Departments', 'View Roles', 'View Employees', 'Update Employee Roles', 'Update Employee Manager(s)', 'View Employees By Manager', 'Delete Department(s)', 'Delete Role(s)', 'Delete Employee(s)', 'View Total Budget']
  }]
)
  .then((answers) => {
    switch (answers) {
      case answers[0]:

        break;
      case answers[1]:

        break;
      case answers[2]:

        break;
      case answers[3]:

        break;
      case answers[4]:

        break;
      case answers[5]:

        break;
      case answers[6]:

        break;
      case answers[7]:

        break;
      case answers[8]:

        break;
      case answers[9]:

        break;
      case answers[10]:

        break;
      case answers[11]:

        break;
      case answers[12]:

        break;

      default:
        break;
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log('Prompt could not be rendered')
    } else {
      console.log(error)
    }
  });


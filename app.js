const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineerjs")
const Intern = require("./lib/Internjs")
const { prompt } = require("inquirer")
const path = require("path")
const { writeFile } = require("fs")

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")

const render = require("./lib/htmlRendererjs")

const team = []

const makeManager = ({ name, id, email }) => {
  prompt({
    type: 'input',
    name: 'officeNumber',
    message: 'What is their office number?'
  })
    .then(({ officeNumber }) => {
      team.push(new Manager(name, id, email, officeNumber))
      menu()
    })
}

const makeEngineer = ({ name, id, email }) => {
  prompt({
    type: 'input',
    name: 'GitHub Username',
    message: 'What is their GitHub Username?'
  })
    .then(({ gitHub }) => {
      team.push(new Engineer(name, id, email, gitHub))
      menu()
    })
}

const makeIntern = ({ name, id, email }) => {
  prompt({
    type: 'input',
    name: 'School',
    message: 'What school do they go to?'
  })
    .then(({ school }) => {
      team.push(new Intern(name, id, email, school))
      menu()
    })
}

const makeEmployee = () => {
  prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Who would you like to create?',
      choices: ['Manager', 'Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is their name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is their ID?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?'
    }
  ])
    .then(({ role, ...employee }) => {
      switch (role) {
        case 'Manager':
          makeManager(employee)
          break
        case 'Engineer':
          makeEngineer(employee)
          break
        case 'Intern':
          makeIntern(employee)
          break
      }
    })
}

const menu = () => {
  prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['Create new employee', 'Done']
  })
    .then(({ action }) => {
      switch (action) {
        case 'Create new employee':
          makeEmployee()
          break
        case 'Done':
          writeFile('./output/team.html', render(team), err => {
            if (err) { console.log(err) }
            console.log('Team have been built!')
          })
          break
      }
    })
}

menu()

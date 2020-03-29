const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util')
const render = require("./lib/htmlRenderer");
const appendFile = util.promisify(fs.appendFile)
const employees = []

main()
async function main(){
    
const qs = await inquirer.prompt([
    {
        name: "role",
        type: "list",
        message: "What is role?",
        choices: ["Engineer", "Intern", "Manager", "I'm all finished."],
    }])

switch (qs.role) {
    case "Engineer":
       await 
       inquirer.prompt([
            {
                name: "name",
                message: "What is name?"
            },
            {
                name: "email",
                message: "What is email?"
            },
            {
                name: "id",
                message: "What is id?"
            },
            {
                name: "github",
                message: "What is github username?"
            },

        ]).then(answers => {
            const eng = new Engineer(answers.name, answers.email, answers.id, qs.role, answers.github)
            employees.push(eng)
        })
        main()
        
    break;
    case "Manager":
        inquirer.prompt([
            {
                name: "name",
                message: "What is name?"

            },
            {
                name: "email",
                message: "What is email?"
            },
            {
                name: "id",
                message: "What is  id?"
            },{
                name: "officeNumber",
                message: "What is office number"
            }

        ]).then(answers => {
        const man = new Manager(answers.name, answers.email, answers.id, qs.role, answers.officeNumber)
        employees.push(man)
        main()
        })
        
            break;
    case "Intern":
        inquirer.prompt([
            {
                name: "name",
                message: "What is  name?"

            },
            {
                name: "email",
                message: "What is email?"
            },
            {
                name: "id",
                message: "What is id?"
            },
            {
                name: "school",
                message: "What is School??"
            }

        ]).then(answers => {
        const intern = new Intern(answers.name, answers.email, answers.id, qs.role, answers.school)
        employees.push(intern)
        main()
        })
                break;
    }
}

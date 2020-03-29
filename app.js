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


}

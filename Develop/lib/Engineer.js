const Employee = require("./Employee.js");

// defines and exports the engineer class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email)
        this.github = github
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
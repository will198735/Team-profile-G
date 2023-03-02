const Employee = require('./Employee');

class Engeneer extends Employee{
    constructor(github){
        super(name, id, email);
        this.github = github

    }
    getGithub() {
        return this.github;

    }


    getRole() {
        return 'Engeneer';

    }

}
module.exports = Engeneer ;
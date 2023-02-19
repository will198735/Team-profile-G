const Employee = require('./Employee');

class Engeneer extends Employee{
    constructor(github){
        this.github = github

        super(name, id, email);
    }
    getGithub() {
        return this.github;

    }


    getRole() {
        return 'Engeneer';

    }

}
module.exports = Engeneer ;
const Employee = require('./Employee');


class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school;

    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'intern';
    }
}
module.exports = Intern ;
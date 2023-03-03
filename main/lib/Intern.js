


class Intern  {
    constructor(name, id, email,school) {
        this.name = name;
        this.id = id;
        this.email = email;
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
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log(`${this.name}`);

    }
    
  


    getId(){
        console.log(`ID ${this.id}`);

    }


    getEmail(){
        console.log(`Email ${this.email}`);

    }

    getRole()

    



}
const thisName = new Employee('Wilfredo');
const thisId = new Employee(1);
const thisEmail = new Employee('recinoswilfredo@gmail.com');



module.exports = Employee;
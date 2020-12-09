class Person {
    constructor(name){
        this.name = name;
    }
    walk() {
        console.log(this.name + ' can walk');
    }
    canRead() {
        console.log(this.name + ' can read');
    }
    
}

class Employee extends Person {
    constructor(name, workField){
        super(name);
        this.workField = workField;
    }
    canWork() {
        console.log(this.name + ' can work in '+ this.workField);
      }
    isHealthy(){
        console.log(`${this.name} is healthy and can do a good work!`);
    }
    isRested(){
        console.log(`${this.name} is rested and ready to work!`);
    }
}

const jonson = new Person('Jonson');
jonson.walk();
jonson.canRead();


const cristi = new Employee('Cristi', 'Programming');
cristi.canWork();
cristi.isHealthy();
cristi.isRested();
cristi.walk();




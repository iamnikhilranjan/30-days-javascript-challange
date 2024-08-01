//1.Class Defination
//Define a class person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`The updated age is ${this.age}.`);
    }
}

const person1 = new Person("Robinhood", 25);
console.log(person1.greet());

//Add a method to the person class that updates the age property and logs the updated age.

person1.updateAge(30);

//2. Class Inheritence
//Define a class student that extends the Person class. Add property studentId and a method to return the student ID. Create an instance of the student class and log the student ID.

class Student extends Person{
    static count = 0;
    constructor(name, age, studnetId){
        super(name, age);
        this.studenId = studnetId;
        Student.count++;
    }

    getStudentId(){
        return `My student ID is ${this.studnetId}.`;
    }

    greet(){
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my  student ID is ${this.studnetId}.`;
    }

    static getTotalStudents(){
        return Student.count;
    }

}

const student = new Student("Robinhood", 25, "ihohaja");

console.log(student.greet());
console.log(student.getStudentId());

//Override the greeting method in student in the Student class to include the student ID in the message. Log the overridden greeting message.

//3. Static Methods and Properties
//Add a static method to the person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message

Person.greeting = function(){
    return "Hello, Welcome!";
};

console.log(Person.greeting());

//Add a static property to the student class to keep track of the number of students created. Increament this property in the constructer and log the total number of students.


const student2 = new Student("robin", 22, "uhiuhfi");
const student3 = new Student("rohan", 22, "uhisdffi");

console.log(Student.getTotalStudents());


//4. Getters and Setters
//Add a getter method to the Person class to return the full name(assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person2{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //getter method to return the full name
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const p1 = new Person2('Robin', 'Hood');
console.log(p1.fullName);

//add a setter method to the person class to update the name properties (firstName and lastName). Update the name using setter and log the updated full name

p1.fullName = 'Nikhil Ranjan';
console.log(p1.fullName);

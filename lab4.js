//2
let customer = {
    name : "Tom",
    surname : "Smith",
    sex : "male",
    age : 27,
    email : "tsmith@gmail.com",

    info() {
        alert(this.name);
        alert(this.surname);
        alert(this.age)
    }
}

customer.info();

//3
let user = {
    name : "John",
    surname : "Green"
}

let order = {
    snack : "cheese plate",
    meal : "steak",
    desert : "pavlova"
}

let restourant = {
    name : "Twins",
    stars : 4
}

//4

function User (name, group){
    this.name = name;
    this.group = group;
}

let me = new User("Козлова С. Л.", "ПИ21-1в");

//5

function Student (name, group, course){
    this.name = name;
    this.group = group;
    this.course = course;
}

let student = new Student ("Смирнова О. Ю.", "ПИ21-3", 1);

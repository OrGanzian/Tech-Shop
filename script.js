const compareNow_btn = document.querySelector(".compare");
compareNow_btn.addEventListener("click", () => alert("Got it!"));

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printPerson() {
    console.log(`my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(GPA, name, age) {
    super(name, age);
    this.GPA = GPA;
  }
}

const or = new Student(85, `or`, 24);
or.printPerson();

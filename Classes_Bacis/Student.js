class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }

  fullname() {
    return `Your name is ${this.firstName} ${this.lastName}. You graduated in ${this.grade}`;
  }
}

let firstStudent = new Student("Mike", "Tyson", "1964");
console.log(firstStudent.fullname());

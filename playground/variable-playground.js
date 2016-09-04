var person = {
  name: 'Jeff',
  age: 21
};

function updatePerson(obj){
  obj.age = 35;
}

updatePerson(person);
console.log(person);

//Array Example
var grades = [15,37];

function addGrade(grades){
  grades.push(78);
}

addGrade(grades);
console.log(grades);

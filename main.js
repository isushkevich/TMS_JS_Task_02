
"use strict";

// 1. создаем студентов
const student1 = {
  firstName: "Stevie",
  lastName: "Netchurch",
  age: 17,
  grades: [ 2, 3, 2, 1, 4 ],
  course: 1,
  gender: "male"
};

const student2 = {
  firstName: "Lily",
  lastName: "Brown",
  age: 20,
  grades: [ 5, 4, 4, 3, 2 ],
  course: 4,
  gender: "female"
};

const student3 = {
  firstName: "Richard",
  lastName: "Hammond",
  age: 19,
  grades: [ 2, 2, 3, 3, 3 ],
  course: 2,
  gender: "male"
};

const student4 = {
  firstName: "Sophia",
  lastName: "Froth",
  age: 19,
  grades: [ 4, 5, 4, 3, 3 ],
  course: 2,
  gender: "female"
};

const student5 = {
  firstName: "Jasper",
  lastName: "Webb",
  age: 20,
  grades: [ 4, 4, 3, 3, 5 ],
  course: 3,
  gender: "male"
};

const student6 = {
  firstName: "Emily",
  lastName: "Welsh",
  age: 21,
  grades: [ 2, 3, 2, 3, 3 ],
  course: 4,
  gender: "female"
};

const student7 = {
  firstName: "Jeremy",
  lastName: "Clarkson",
  age: 20,
  grades: [ 2, 3, 2, 3, 2 ],
  course: 3,
  gender: "male"
};

const student8 = {
  firstName: "Charlotte",
  lastName: "Keogh",
  age: 19,
  grades: [ 3, 2, 3, 1, 4 ],
  course: 2,
  gender: "female"
};

const student9 = {
  firstName: "Oliver",
  lastName: "Moth",
  age: 20,
  grades: [ 3, 3, 4, 3, 4 ],
  course: 3,
  gender: "male"
};

const student10 = {
  firstName: "James",
  lastName: "May",
  age: 21,
  grades: [ 1, 2, 4, 3, 3 ],
  course: 4,
  gender: "male"
};

// 2. Кладем их в массив
const studentsArr = [ student1, student2, student3, student4, student5, student6, student7, student8, student9, student10 ];

// 3. Проверяем оценки, пол и возраст. Добавляем isReadyForArmy, удаляем grades, course
function averageFun( student ) {
  let sum = 0;
  for ( let i = 0; i < student.grades.length; i++ ) {
    sum += student.grades[ i ];
  }
  return sum / student.grades.length;
}

for ( let i = 0; i < studentsArr.length; i++ ) {
  if ( averageFun( studentsArr[ i ] ) < 3 && studentsArr[ i ].gender === "male" && studentsArr[ i ].age >= 18 && studentsArr[ i ].age <= 27 ) {
    studentsArr[ i ].isReadyForArmy = true;
    delete studentsArr[ i ].grades;
    delete studentsArr[ i ].course;
  }
}

// 4. Массив солдат
const soldiersArr = [];

// 5. Кладем подходящих студентов в массив солдат
for ( let i = 0; i < studentsArr.length; i++ ) {
  if ( studentsArr[ i ].isReadyForArmy ) {
    soldiersArr.push( studentsArr[ i ] );
  }
}

console.log( soldiersArr );
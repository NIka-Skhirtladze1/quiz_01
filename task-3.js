/*
მოცემულია სტუდენტების მასივი, განახორციელეთ შემდეგი დალაგების ფუნქციები:

1. sortByGrade(students)
  - დაალაგეთ სტუდენტები ქულების მიხედვით კლებადობით

2. sortByAgeAndGrade(students)
  - დაალაგეთ სტუდენტები პირველ რიგში ასაკის მიხედვით (ზრდადობით)
  - თუ ასაკი ტოლია, დაალაგეთ ქულების მიხედვით (კლებადობით)

მოთხოვნები:
- არ შეცვალოთ ორიგინალი მასივი
- დააბრუნეთ ახალი დალაგებული მასივები
*/

const students = [
  { name: "Alice", age: 20, grade: 85, attendance: 90 },
  { name: "Bob", age: 19, grade: 91, attendance: 85 },
  { name: "Charlie", age: 20, grade: 85, attendance: 95 },
  { name: "David", age: 18, grade: 88, attendance: 88 },
  { name: "Eve", age: 19, grade: 92, attendance: 92 },
];

// თქვენი კოდი აქ

function sortByGrade(students) {
  //
  const sorted = students.toSorted((a, b) => b.age - a.age);
  return sorted;
}

function sortByAgeAndGrade(students) {
  //
  const sorted = students.toSorted((a, b) => {
      if(a.age > b.age){
        return 1;
      }
      if(a.age < b.age){
        return -1;
      }
      if(a.age == b.age && a.grade < b.grade){
        return 1;
      }
      if(a.age == b.age && a.grade > b.grade){
        return -1;
      }
      if(a.age == b.age && a.grade == b.grade){
        return 0;
      }
  });
  return sorted;
}

console.log(sortByGrade(students));

console.log(sortByAgeAndGrade(students));

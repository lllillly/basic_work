const students = [
  {
    name: "하이",
    gender: "man",
    age: 18,
    grade: 2,
    printHandler: () => {
      console.log(`하이는 18세 입니다.`);
    },
  },
  {
    name: "안녕",
    gender: "fm",
    age: 18,
    grade: 2,
    printHandler: () => {
      console.log(`안녕은 18세 입니다.`);
    },
  },
];

console.log(students[0].name);

students[0].printHandler();
students[1].printHandler();

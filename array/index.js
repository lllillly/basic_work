const arr = [];

setTimeout(() => {
  console.log("데이터를 한 개 추가합니다. push()");
  arr.push("안녕");
  console.log(`현재 arr : ${arr}`);
}, 1000);

setTimeout(() => {
  console.log("데이터를 한 개 추가합니다. push()");
  arr.push("반가워");
  console.log(`현재 arr : ${arr}`);
}, 2000);

setTimeout(() => {
  console.log("데이터를 한 개 추가합니다. push()");
  arr.push("헬로");
  console.log(`현재 arr : ${arr}`);
}, 3000);

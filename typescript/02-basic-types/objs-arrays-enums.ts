// const person: { name: string; age: number } = {
//   name: "gildong",
//   age: 30,
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "gildong",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
  // enum 으로 숫자에 레이블을 달 수 있음
  // 내부적으로 첫번째는 0, 두번째는 1, 세번째는 2 값이 됨
  // 숫자 지정하고 싶으면 ADMIN: 5 이렇게 하면 된다 (다음 식별자는 자동으로 시작값에서 +1 하여 값 할당)
  // 다 지정하고 싶으면 ADMIN: 5, READ_ONLY: 10, AUTHOR: 'AUTHOR' (숫자뿐만아니라 무엇이든 지정가능)
}

const person = {
  name: "gildong",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN, // 0
};

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"]; -> ok
// favoriteActivities = ['Sports', 1]; -> error(혼합된 배열)

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase);
  // 타입스크립트는 hobby가 문자열임을 인식하기 때문에 문자열 관련 함수 허용

  //console.log(hobby.map()); -> 에러 (map 함수는 배열에 쓸 수 있지만 문자열에서는 안되기 때문)
}

// person.role.push("admin"); // push는 튜플에서 허용되는 일종의 예외 (타입스크립트가 이 오류 못잡음..)
// person.role[1] = 10; -> error

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// 리턴타입 void : 아무 값도 반환하지 않음 (어떤 값을 반환하도록 강요하지도 않음)
// return이 있는 경우 실행되지만 어디에도 쓰이지 않음 (무시)
function printResult(num: number): void {
  console.log("Result: " + num);
}

function printResultUndefined(num: number): undefined {
  console.log("Result: " + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 2));

console.log(printResult(add(5, 2)));

let combineValues: (a: number, b: number) => number;
// 화살표 오른쪽에는 함수의 반환 타입 명시

combineValues = add;
// combineValues = 5; -> error
// combineValues = printResult; -> error

console.log(combineValues(10, 2));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
});

let userInput: unknown;
let userInputAny: any;
let userName: string;

userInput = 5;
userInput = "HongGildong";
// userName = userInput; -> error (unknown을 string 타입에 할당할 수 없음)
userName = userInputAny; // ok (any는 타입스크립트에서 가장 유연한 타입. 아예 타입 확인 자체를 안함)

if (typeof userInput == "string") {
  userName = userInput; // 타입스크립트가 이 검사를 감지해서 ok 해줌
}

function generateError(message: string, code: number): never {
  throw { message: message, eooroCode: code };
} // 이 함수는 never를 반환 (절대 반환 값을 생성하지 않음)

const result = generateError("An error occurred!", 500);
console.log(result); // 오류가 발생했을 때 스크립트를 멈추기 때문에 return 값 없음

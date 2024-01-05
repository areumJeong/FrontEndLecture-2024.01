// 객체에 대한 반복문

let maria = {name:'마리아', age:25, job:'학생'};
let name = '제임스', age = 27, job = '프로그래머';
let James = {name:name, age:age, job:job};
console.log(maria, James);

for (let key in James) {
    console.log(key, ':', James[key]);
}

// ES-6 (ECMA Script - 6, 2015년도에 제정된  표준)
// key와 value를 가리키는 변수의 이름이 동일하면 변수명 생략 가능
let James2 = {name, age, job};      // {name:name, age:age, job:job}을 의미

// JSON(JavaScript Object Notation)
//      - 외부와 데이터를 주고 받을 때 사용
//      - 업계 표준 (de facto standard)
let externalForm = JSON.stringify(James);
console.log(externalForm);

let person = JSON.parse(externalForm)
console.log(person);
console.log(person.name == James.name && person.age == James.age && person.job == James.job);

// object들로 구성된 배열도 가능
let personArray = [James, maria];
console.log(personArray);

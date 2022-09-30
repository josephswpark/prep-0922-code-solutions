function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}

var minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', minutes);

function getGreeting(name) {
  const x = 'Hello';
  return x + ' ' + name + '!';
}

var greeting = getGreeting('World');
console.log('getGreeting Exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var multiply = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', multiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var divide = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', divide);

// subtracttwonumbers

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtract);

// getcirclecircumferece

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}

var circumference = getCircleCircumference(5);
console.log('getCircleCircumference Execise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const fullName = getFullName('Joseph', 'Park');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  return number * number * number;
}

const cubeResults = cube(5);
console.log('cubeResults Exercise:', cubeResults);

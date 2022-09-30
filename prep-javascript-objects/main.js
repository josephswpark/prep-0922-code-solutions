const person = {
  firstName: 'Joseph',
  lastName: 'Park',
  hobby: 'basketball'
};
console.log(person);

var fullName = person.fullName + ' ' + person.lastName;
console.log("The person's name is: ", fullName + '.');

person.job = 'Medical Assistant';
console.log("The person's current job is:", person.job + '.');

person.previousJob = 'student';

console.log("The person's previous job is: ", person.previousJob + '.');

console.log('The complete person object: ', person);

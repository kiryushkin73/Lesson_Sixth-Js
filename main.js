let words = ['Максим', 'Сергей', 'Николай'];
let numbers = [1, 2, 3, 4];
// map
function map(arr, mapper) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = mapper(arr[i]);
  }
  return result;
}
console.log(map(['Максим', 'Сергей', 'Николай'], (a) => a[1] === 'a'));

//some
function some(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) return true;
  }
  return false;
}
console.log(some(['Максим', 'Сергей', 'Николай'], (a) => a == 'Николай'));

//every
function every(arr, predicate) {
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) return false;
  }
  return true;
}
console.log(every(['11', '11', '10'], (a) => a == '11'));

//reduce
function reduce(arr, predicate, startValue) {
  let result = startValue + arr[0];
  for (let i = 0; i < arr.length; i++) {
    result = predicate(arr[i], result);
  }
  return result;
}
console.log(reduce([1, 2, 3, 4], (a, current) => current + a, 'A'));
console.log(reduce(words, (sum, current) => current + sum, 'plus_'));

let user0 = {
  firstName: 'Максим',
  lastName: 'Коваль',
  parentsName: 'Сергеевич',
  phone: '380635425555',
};
let user1 = {
  firstName: 'Николай',
  lastName: 'Береза',
  parentsName: 'Максимович',
  phone: '380951236666',
};
let user2 = {
  firstName: 'Сергей',
  lastName: 'Волков',
  parentsName: 'Николаевич',
  phone: '380994561111',
};
let user3 = {
  firstName: 'Василий',
  lastName: 'Уткин',
  parentsName: 'Сергеевич',
  phone: '380976782222',
};
let users = [user0, user1, user2, user3];

//а)
function matchesFirsLetterName(inValue) {
  let result = inValue.filter(
    (item) => item.firstName[0] === item.parentsName[0]
  );
  return result;
}
console.log(matchesFirsLetterName(users));

//в)
function transformLastnameInitials(inValue) {
  let result = inValue.map((item) =>
    [item.lastName, item.firstName[0], item.parentsName[0]].join(' ')
  );
  return result;
}
console.log(transformLastnameInitials(users));

//с)
function searchPhone(inValue, phone) {
  let result = inValue
    .filter((item) => item.phone.indexOf(phone) === 0)
    .map((item) => [item.lastName, item.phone].join(' - '));
  return result;
}
console.log(searchPhone(users, 38065));

// д)
function searchPhoneTrue(inValue, phone) {
  let result = inValue.some((item) => item.phone == phone);
  return result;
}
console.log(searchPhoneTrue(users, 380976782222));

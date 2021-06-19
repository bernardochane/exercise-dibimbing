let regexEmail =/[a-z]{3,}[@][a-z]{1,}[.](com)/;
console.log(regexEmail.test('be'))
console.log(regexEmail.test('bernard@'));
console.log(regexEmail.test('bernardcha@gmail.com'));
console.log(regexEmail.test('bernard@gmail'));
console.log(regexEmail.test('bernard@gmail.id'));
console.log(regexEmail.test('bernard@gmail.com'));

console.log();

let regexNomorIndo =/^[0|62|+62]{1,1}[0-9]{10,12}$/;
console.log(regexNomorIndo.test('08231000213'));
console.log(regexNomorIndo.test('+62831000213'));
console.log(regexNomorIndo.test('62831000213'));
console.log(regexNomorIndo.test('8321000213'));
console.log(regexNomorIndo.test('621231931937130'));
const validator = require('validator');
const getNotes = require('./notes');

console.log(getNotes());

console.log(validator.isEmail('ItmeClarke@example.com'));

console.log(validator.isURL('www.mead.io'));

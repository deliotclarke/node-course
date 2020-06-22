const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const personObj = JSON.parse(dataJSON);

const itmeClarke = { ...personObj };
itmeClarke.name = 'Eliot';
itmeClarke.age = 36;

const itmeToJSON = JSON.stringify(itmeClarke);

fs.writeFileSync('1-json.json', itmeToJSON);

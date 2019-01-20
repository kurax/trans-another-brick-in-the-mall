const fs = require('fs');
const parseString = require('xml2js').parseString;

const xml = fs.readFileSync('./English/strings.xml').toString().replace(/&/g, '&amp;');
parseString(xml, { explicitArray: false }, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.writeFileSync('./English/strings.json', JSON.stringify(result, null, 2));
});

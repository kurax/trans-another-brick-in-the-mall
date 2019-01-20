const fs = require('fs');
const parseString = require('xml2js').parseString;

const xml = fs.readFileSync('./en_US/strings.xml').toString().replace(/&/g, '&amp;');
parseString(xml, { explicitArray: false }, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  result = result.LanguageData;
  fs.writeFileSync('./en_US/strings.json', JSON.stringify(result, null, 2));
  const translated = JSON.parse(fs.readFileSync('./zh_Hans/strings.json').toString());
  fs.writeFileSync('./zh_Hans/strings.json', JSON.stringify(Object.assign({}, result, translated), null, 2));
});

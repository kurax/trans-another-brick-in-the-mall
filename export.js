const fs = require('fs');
const builder = require('xmlbuilder');

const root = builder.create('LanguageData', { version: '1.0', encoding: 'utf-8' });

const translated = JSON.parse(fs.readFileSync('./zh_Hans/strings.json').toString());
Object.keys(translated).forEach(key => root.ele(key, {}, translated[key]));

const xml = root.end({ pretty: true }).replace(/&#xD;/g, '').replace(/&amp;/g, '&');
fs.writeFileSync('./zh_Hans/strings.xml', xml);

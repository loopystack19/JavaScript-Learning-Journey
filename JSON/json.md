JSON.stringify()-Converts a json object or Array into one long string

**sample programme**

const names = ["spongeBob", "patrick", "squirdward", "sandy", "Krabs"];

const jsonString=JSON.stringify(names);

console.log(names);

console.log(jsonString);

JSON.parse()-converts a json string into an object

**sample programme**

const { parseIntoDocument } = require("jsdom/lib/jsdom/browser/parser");

let names = '["spongeBob", "patrick", "squirdward", "sandy", "Krabs"]';

const parsedNames=JSON.parse(names);

console.log(parsedNames);
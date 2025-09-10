const { parseIntoDocument } = require("jsdom/lib/jsdom/browser/parser");

let names = '["spongeBob", "patrick", "squirdward", "sandy", "Krabs"]';

const parsedNames=JSON.parse(names);

console.log(parsedNames);


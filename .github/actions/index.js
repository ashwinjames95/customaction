const { getInput } = require('@actions/core');

const string1 = getInput('string1');
const string2 = getInput('string2');

console.log(`Combined string: ${string1}-${string2});


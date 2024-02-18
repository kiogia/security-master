const dictionary = require('./dictionary.js');

function createPhrase(length = 12) {
  const mixed = dictionary.sort(() => 0.5 - Math.random());
  return mixed.slice(0, length);
}

module.exports = { dictionary, createPhrase };

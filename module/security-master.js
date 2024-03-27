import dictionary from './dictionary.js';

function createPhrase(length = 12) {
  const mixed = dictionary.sort(() => 0.5 - Math.random());
  return mixed.slice(0, length);
}

export { dictionary, createPhrase };

export default { dictionary, createPhrase };

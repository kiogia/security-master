import dictionary from './dictionary.js';

export * as dictionary from './dictionary.js';

export function createPhrase(length = 12) {
  const mixed = dictionary.sort(() => 0.5 - Math.random());
  return mixed.slice(0, length);
}

export default { dictionary, createPhrase };

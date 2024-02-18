declare module 'security-master';

import { Words } from './dictionary';

export const dictionary: Array<Words>;

export function createPhrase(length: number): Array<Words>;

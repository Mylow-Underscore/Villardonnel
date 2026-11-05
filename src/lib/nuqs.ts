import { parseAsInteger, parseAsString } from 'nuqs';

export const filter = parseAsString.withDefault('');
export const page = parseAsInteger.withDefault(1);

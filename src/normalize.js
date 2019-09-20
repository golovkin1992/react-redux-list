import { normalize, schema } from 'normalizr';

export const book = new schema.Entity('books');
export const booksList = [book];

export const mySchema = { books: [book] };

export const bookNormalizer = bookResult => normalize(bookResult, booksList);

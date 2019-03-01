import { uniq } from 'lodash/array';
import { map } from 'lodash/collection';

export const books = require('../books.json');
export const genres = uniq(map(books, 'Genre'));
export const authors = uniq(map(books, 'Author'));

import * as BookUtils from '../util/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';


const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});

const receiveBookErrors = errors => ({
  type: RECEIVE_BOOK_ERRORS,
  errors
});


export const fetchBooks = () => dispatch => (
  BookUtils.fetchBooks().
  then(books => dispatch(receiveBooks(books)
    ), err => receiveBookErrors(err))

);

export const fetchBook = (id) => dispatch => (
  BookUtils.fetchBook(id).
  then(book => dispatch(receiveBooks(book)
    ), err => receiveBookErrors(err))

);

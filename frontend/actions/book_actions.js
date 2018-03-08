import * as BookUtils from '../util/book_api_util';

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RECEIVE_BOOK_ERRORS = 'RECEIVE_BOOK_ERRORS';


const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});

const receiveBookErrors = errors => {
  debugger
return({
  type: RECEIVE_BOOK_ERRORS,
  errors
});};


export const fetchBooks = () => dispatch => (
  BookUtils.fetchBooks().
  then(books => dispatch(receiveBooks(books)
), err => dispatch(receiveBookErrors(err)))

);

export const fetchBook = (id) => dispatch => {
  return(
    BookUtils.fetchBook(id).
    then(book => dispatch(receiveBooks(book)
  ), err => dispatch(receiveBookErrors(err)))

);};

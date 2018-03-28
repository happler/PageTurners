import * as ShelfUtils from "../util/bookshelf_api_util";

export const RECEIVE_SHELF = "RECEIVE_SHELF";
export const REMOVE_SHELF = "REMOVE_SHELF";
export const RECEIVE_SHELVING = "RECEIVE_SHELVING";
export const REMOVE_SHELVING = "REMOVE_SHELVING";
export const RECEIVE_SHELF_ERRORS = "RECEIVE_SHELF_ERRORS";
export const RECEIVE_SHELVING_ERRORS = "RECEIVE_SHELVING_ERRORS";

const receiveShelf = payload => ({
  type: RECEIVE_SHELF,
  payload
});
const removeShelf = payload => ({
  type: REMOVE_SHELF,
  payload
});

const receiveShelving = payload => ({
  type: RECEIVE_SHELVING,
  payload
});

const removeShelving = payload => ({
  type: REMOVE_SHELVING,
  payload
});

const receiveShelvingError = errors => ({
  type: RECEIVE_SHELVING_ERRORS,
  errors
});

const receiveShelfError = errors => ({
  type: RECEIVE_SHELF_ERRORS,
  errors
});

export const shelveBook = (shelfId, bookId) => dispatch =>
  ShelfUtils.shelveBook(shelfId, bookId).then(
    shelving => dispatch(receiveShelving(shelving)),
    err => dispatch(receiveShelvingError(err))
  );

export const unshelveBook = (shelfId, bookId) => dispatch =>
  ShelfUtils.unshelveBook(shelfId, bookId).then(
    shelving => dispatch(removeShelving(shelving)),
    err => dispatch(receiveShelvingError(err))
  );

export const fetchShelf = id => dispatch =>
  ShelfUtils.fetchShelf(id).then(
    returnedShelf => dispatch(receiveShelf(returnedShelf)),
    err => dispatch(receiveShelfError(err))
  );

export const postShelf = bookshelf => dispatch =>
  ShelfUtils.postShelf(bookshelf).then(
    returnedShelf => dispatch(receiveShelf(returnedShelf)),
    err => dispatch(receiveShelfError(err))
  );

export const deleteShelf = shelfId => dispatch =>
  ShelfUtils.deleteShelf(shelfId).then(
    returnedShelf => dispatch(removeShelf(returnedShelf)),
    err => dispatch(receiveShelfError(err))
  );

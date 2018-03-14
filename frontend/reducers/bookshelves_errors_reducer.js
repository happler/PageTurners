import { CLEAR_ALL_ERRORS } from '../actions/global_actions';
import{
  RECEIVE_SHELF_ERRORS,
  RECEIVE_SHELVING_ERRORS,
} from '../actions/bookshelf_actions';

const BookshelvesErrorsReducer = (state = [], action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHELF_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_SHELVING_ERRORS:
      return action.errors.responseJSON;
    case CLEAR_ALL_ERRORS:
      return [];
    default:
      return state;

  }
};

export default BookshelvesErrorsReducer;

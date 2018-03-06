import SessionErrorsReducer from './session_errors_reducer';
import { combineReducers } from 'redux';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer
});

export default ErrorsReducer;

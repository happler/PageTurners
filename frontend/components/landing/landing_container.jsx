import { connect } from 'react-redux';
import React from 'react';
import Landing from './landing';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/global_actions';


const msp = (state, ownProps) => {
  return({
    errors: state.errors.session,

    path: ownProps.match.path,
  });
};

const mdp = dispatch => {
  return({
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    demoLogin: () => dispatch(login({username:"Demo User", password:'starwars'})),
    clearErrors: () => dispatch(clearErrors()),

  });
};

export default connect(msp, mdp)(Landing);

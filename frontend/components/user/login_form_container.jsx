import { connect } from 'react-redux';
import React from 'react';
import AuthForm from './auth_form';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const msp = state => {
  return({
    errors: state.errors.session,
    formType: "Sign in",
    preposition: "to",
    altLoginText: "Not a Member?",
    navLink: <Link to='/signup' >Sign Up</Link>,
  });
};

const mdp = dispatch => {
  return({
    submitAction: (user) => dispatch(login(user))
  });
};

export default connect(msp, mdp)(AuthForm);

import { connect } from 'react-redux';
import React from 'react';
import AuthForm from './auth_form';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';

const msp = state => {
  return({
    errors: state.errors.session,
    formType: "Sign up",
    preposition: "for",
    altLoginText: "Already a Member?",
    navLink: <Link to='/login' >Sign In</Link>,
  });
};

const mdp = dispatch => {
  return({
    submitAction: (user) => dispatch(signup(user)),
    demoLogin: () => dispatch(login({username:"Muad'Dib", password:'starwars'}))
  });
};

export default connect(msp, mdp)(AuthForm);

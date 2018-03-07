import { connect } from 'react-redux';
import React from 'react';
import AuthForm from './auth_form';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/global_actions';


const msp = (state, ownProps) => {
  return({
    errors: state.errors.session,
    formType: "Sign up",
    preposition: "for",
    altLoginText: "Already a Member?",
    path: ownProps.match.path,
  });
};

const mdp = dispatch => {
  return({
    submitAction: (user) => dispatch(signup(user)),
    demoLogin: () => dispatch(login({username:"Muad'Dib", password:'starwars'})),
    clearErrors: () => dispatch(clearErrors()),

  });
};

export default connect(msp, mdp)(AuthForm);

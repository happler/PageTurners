import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';



const Header = ({ user, logoutButton, history }) =>{
  return(
    <ul className="nav-bar">
      <ul className="left-nav">
        <li className="left-nav-home" onClick={(e)=> history.push("/")}>PageTurners</li>
      </ul>
      <ul className="right-nav">
        <li>
          {user.username}
        </li>
        <li>
          <button onClick={(e) => logoutButton()}>Log Out</button>
        </li>
      </ul>
    </ul>
  );
};

const msp = state => ({
  user:state.session.currentUser
});

const mdp = dispatch => ({
  logoutButton:() => dispatch(logout())
});

export default withRouter(connect(msp, mdp)(Header));

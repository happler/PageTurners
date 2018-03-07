import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const Header = ({ user, logoutButton }) =>{
  return(
    <ul className="Nav-Bar">
      <ul className="Left-Nav">
        <li>PageTurners</li>
      </ul>
      <ul className="Right-Nav">
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

export default connect(msp, mdp)(Header);

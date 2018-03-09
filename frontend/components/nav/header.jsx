import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { withRouter, Link } from 'react-router-dom';



const Header = ({ user, logoutButton, history }) =>{
  return(
    <div className='nav-bar-container'>
      <ul className="nav-bar">
        <ul className="left-nav">
          <li className="left-nav-home" onClick={(e)=> history.push("/")}>PageTurners</li>
          <li className="left-nav-shelves">Shelf Link Placeholder</li>
          <Link to='/books/33' className="left-nav-shelves">Book Demo</Link>
        </ul>
        <ul className="right-nav">
          <li className="right-nav-user">
            {user.username}
          </li>
          <li onClick={(e) => logoutButton()} className='right-nav-logout'>
            Log Out
          </li>
        </ul>
      </ul>
    </div>
  );
};

const msp = state => ({
  user:state.session.currentUser
});

const mdp = dispatch => ({
  logoutButton:() => dispatch(logout())
});

export default withRouter(connect(msp, mdp)(Header));

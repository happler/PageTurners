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
          <Link to={`/users/${user.id}/shelf`} className="left-nav-shelves">My Books</Link>
          <Link to='/books/360' className="left-nav-shelves">Book Demo</Link>
        </ul>
        <ul className="right-nav">
          <Link to={`/users/${user.id}/shelf`} className="right-nav-user">
            {user.username}
          </Link>
          <li onClick={(e) => logoutButton().then( ()=> history.push("/") )} className='right-nav-logout'>
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

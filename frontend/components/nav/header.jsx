import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { withRouter, Link } from "react-router-dom";
import { fetchUser } from "../../actions/user_actions";

class Header extends React.Component {
  componentDidMount() {
    const id = this.props.currentUser.id;
    if (!this.props.users[id]) {
      this.props.fetchUser(id);
    }
  }

  render() {
    const { currentUser, logoutButton, history } = this.props;
    return (
      <div className="nav-bar-container">
        <ul className="nav-bar">
          <ul className="left-nav">
            <li className="left-nav-home" onClick={e => history.push("/")}>
              PageTurners
            </li>
            <Link
              to={`/users/${currentUser.id}/shelf`}
              className="left-nav-shelves"
            >
              My Books
            </Link>
            <Link to="/" className="left-nav-shelves">
              All Books
            </Link>
          </ul>
          <ul className="right-nav">
            <Link
              to={`/users/${currentUser.id}/shelf`}
              className="right-nav-user"
            >
              {currentUser.username}
            </Link>
            <li
              onClick={e => logoutButton().then(() => history.push("/"))}
              className="right-nav-logout"
            >
              Log Out
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}

const msp = state => ({
  currentUser: state.session.currentUser,
  users: state.entities.users
});

const mdp = dispatch => ({
  logoutButton: () => dispatch(logout()),
  fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(connect(msp, mdp)(Header));

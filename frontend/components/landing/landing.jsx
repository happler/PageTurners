import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { merge } from 'lodash';

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {login: {username:'', password: ''}, signup: {username:'', password: ''} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(type, field, unchanged){
    return e => {

      const newState = merge({}, this.state, {[field]: {[type]:e.currentTarget.value}});
      this.setState(newState);
  };
}

  handleDemo(e){
    // debugger
    this.props.demoLogin();
  }

  handleSubmit(type){
    return e =>{
    e.preventDefault();
    this.props[type](this.state[type])
    .then(() => this.props.history.push('/')
    ,() => this.props.history.push(`/${type}`));
  };}

  render(){
    const {  clearErrors} = this.props;
    const navLink = this.props.match.path ==='/signup'
      ? <Link to='/login' onClick={() => clearErrors()}>Sign In</Link>
      : <Link to='/signup' onClick={() => clearErrors()}>Sign Up</Link>;
    return(
      <div className='landing-container'>
        <div className='landing-header'>
        <p className="landing-header__left">PageTurners</p>
          <form
            onSubmit={this.handleSubmit('login')}
            className="landing-header__right"
          >
            <div className='landing-header__right__left'>
              <input
                className="landing-header__field"
                type='text'
                onChange={this.update('username', 'login', 'password')}
                placeholder='Username'
                value={this.state.username} />
                <p className="landing-header__demo__title">
                  Forgot your password?
                </p>
            </div>
            <div className='landing-header__right__center'>
              <input
                className='landing-header__field'
                type='password'
                onChange={this.update('password', 'login', 'username')}
                placeholder='Password'
                value={this.state.password} />
                <p
                  className="landing-header__demo__link"
                  onClick={(e)=> this.handleDemo(e)}>
                  Try our demo!
                </p>
            </div>
            <div>
              <div className='landing-header__right__right'>
                <input className='landing-header__submit-button' type='submit' value="Sign in"/>
              </div>
            </div>
        </form>
      </div>
      <div className='landing-body'>
      <p className="landing-body__left">Meet your next favourite book.</p>
        <form
          onSubmit={this.handleSubmit('signup')}
          className="landing-body__right"
        >
          <h2 className='landing-body__title'>New here? Create a free account!</h2>
          <input
            className="landing-body__field"
            type='text'
            onChange={this.update('username', 'signup', 'password')}
            placeholder='Username'
            value={this.state.username} />
          <input
            className='landing-body__field'
            type='password'
            onChange={this.update('password', 'signup', 'username')}
            placeholder='Password'
            value={this.state.password} />
          <input className='landing-body__submit-button' type='submit' value="Sign up"/>
            <h2
              className="landing-body__demo__link"
              onClick={(e)=> this.handleDemo(e)}>
              ...or sign in using our demo!
            </h2>
      </form>
    </div>
    </div>
    );
  }
}


// <li className="landing-form-demo">
//   <span onClick={(e)=> this.handleDemo(e)}>
//     Continue with Demo
//   </span>
// </li>



export default withRouter(Landing);

import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Landing extends React.Component{
  constructor(props){
    super(props);
    this.state = {username:'', password: ''};
  }

  update(type){
    return e => this.setState({[type]:e.currentTarget.value});
  }

  handleDemo(e){
    // debugger
    this.props.demoLogin();
  }

  handleSubmit(e){
    e.preventDefault();
    // if( this.state.username === '' || this.state.password === '') return
    this.props.submitAction(this.state)
    .then(() => this.props.history.push('/')
    ,() => this.setState({password:''}) );
  }

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
            onSubmit={(e) => this.handleSubmit(e)}
            className="landing-header__right"
          >
            <div className='landing-header__right__left'>
              <input
                className="landing-header__field"
                type='text'
                onChange={this.update('username')}
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
                onChange={this.update('password')}
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
                <input className='landing-submit-button' type='submit' value="Sign in"/>
              </div>
            </div>
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

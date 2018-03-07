import React from 'react';
import { withRouter } from 'react-router-dom';

class AuthRouter extends React.Component{
  constructor(props){
    super(props);
    this.state = {username:'', password: ''};
  }

  update(type){
    return e => this.setState({[type]:e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.submitAction(this.state)
    .then(() => this.props.history.push('/'),() => this.setState({password:''}) );
  }

  render(){
    const { formType, altLoginText, navLink, preposition} = this.props
    return(
      <div className="auth-form-container">
        <form onSubmit={(e) => this.handleSubmit(e)} className="auth-form">
          <ul>
            <li>{`${formType} ${preposition} PageTurners`}</li>
            <li className="auth-form-demo">
              <button>Continue with Demo</button>
            </li>
            {this.props.errors.map((error, idx) => <li key={ idx }>{error}</li>) }
            <li>
              <label className='auth-form-input'>Username
                <input
                  className="auth-field"
                  type='text'
                  onChange={this.update('username')}
                  value={this.state.username} />
              </label>
            </li>
            <li>
              <label className='auth-form-input'>Password
                <input
                  className='auth-field'
                  type='password'
                  onChange={this.update('password')}
                  value={this.state.password} />
              </label>
            </li>
            <li>
              <ul className='submit-row'>
                <li>
                  <input type='submit' value={formType}/>
                </li>
                <li>
                  Forgot your password? Try our demo!
                </li>
              </ul>
            </li>
            <li>
              <ul className='switch-forms'>
                <li>
                  {altLoginText}
                </li>
                <li>
                  {navLink}
                </li>
              </ul>

            </li>
        </ul>
      </form>
    </div>
    );
  }
}


export default withRouter(AuthRouter);

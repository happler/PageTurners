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

  handleDemo(e){
    this.props.submitAction({username:"muaddib", password:"starwars"});
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
            <li className="auth-form-title">{`${formType} ${preposition} PageTurners`}</li>
            <li className="auth-form-demo">
              <button onClick={(e)=> this.handleDemo(e)}>Continue with Demo</button>
            </li>
            {this.props.errors.map((error, idx) => <li className='auth-form-error' key={ idx }>{error}</li>) }
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
                  Forgot your password? <p className="auth-form-demo-link" onClick={(e)=> this.handleDemo(e)}>Try our demo!</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className='switch-forms'>
                <li>
                  {altLoginText}
                </li>
                <li className="auth-form-link">
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

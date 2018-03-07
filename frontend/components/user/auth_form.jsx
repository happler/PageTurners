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
    const { formType, altLoginText, navLink} = this.props
    return(
      <div>
        <ul>
          {this.props.errors.map((error, idx) => <li key={ idx }>{error</li>) }
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Username
            <input
              type='text'
              onChange={this.update('username')}
              value={this.state.username} />
          </label>
          <label>Password
            <input
              type='password'
              onChange={this.update('password')}
              value={this.state.password} />
          </label>
          <input type='submit'/>
        </form>
      </div>
    );
  }
}


export default withRouter(AuthRouter);

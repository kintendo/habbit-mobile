'use strict';

import React, {Component, PropTypes}  from 'react';
import { connect } from 'react-redux';
import { emailSignup, emailLogin } from '../services/authService';
import { initServices } from '../lib/init';
import * as actions from '../lib/actions';
import * as userService from '../services/userService';
import { Text, Button, View, TextInput } from 'react-native';

class Login extends Component {



  constructor(props) {
    super(props);
    this.initializeUser = this.initializeUser.bind(this);
    this.handleEmailLogin = this.handleEmailLogin.bind(this);
    this.handleEmailSignup = this.handleEmailSignup.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  initializeUser(uid) {
    this.props.setUserId(uid);
    initServices(uid);
  }

  handleEmailLogin() {
    emailLogin(this.state.email, this.state.password)
    .then((res) => {
      console.log('RESPONSE', JSON.stringify(res));
    });
  }

  handleEmailSignup() {
    emailSignup(this.state.email, this.state.password)
    .then((res) => {
      console.log('RESPONSE', JSON.stringify(res));
    });
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleEmailLogin} />
        <Button title="Signup" onPress={this.handleEmailSignup} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {userData} = state;
  return {
    uid: userData.uid
  };
}
Login.propTypes = {
  setUserId: PropTypes.func,
  changeView: PropTypes.func
}
export default connect(mapStateToProps, actions)(Login);

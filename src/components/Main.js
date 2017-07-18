'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../lib/actions';
import { initServices } from '../lib/init';
import { getSession } from '../services/authService';
import HabbitContent from './HabbitContent';
import Nav from './Nav';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


class Main extends Component {
  constructor(props) {
    super(props);
    this.initializeUser = this.initializeUser.bind(this);
  }

  initializeUser(uid) {
    this.props.setUserId(uid);
    initServices(uid);
  }

  componentDidMount() {
    getSession((user) => {
      const uid = user && user.uid;
      if (uid) {
        this.initializeUser(uid);
        this.props.changeView('list');
      }
    });
  }

  render() {
    const {view, uid} = this.props;

    return (
      <View style={styles.container}>
        <Text>Habbit</Text>
        { uid ? <Nav /> : null }
        <HabbitContent view={view} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {viewData, userData} = state;
  return {
    view: viewData.view,
    uid: userData.uid
  };
}
Main.propTypes = {
  // state
  uid: PropTypes.string,
  view: PropTypes.string,
  // actions
  changeView: PropTypes.func,
  setUserId: PropTypes.func
};
export default connect(mapStateToProps, actions)(Main);

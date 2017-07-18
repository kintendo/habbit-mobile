'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../lib/actions';
import { Text, Button, View, TextInput } from 'react-native';

class Nav extends Component {

  render() {
    const { changeView } = this.props;

    return (
      <View>
        <Button title="Habbits" onPress={ changeView.bind(this, 'list') } />
        <Button title="Categories" onPress={ changeView.bind(this, 'cat-list') } />
        <Button title="New Habbit" onPress={ changeView.bind(this, 'new') } />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
Nav.propTypes = {
  changeView: PropTypes.func
}
export default connect(mapStateToProps, actions)(Nav);

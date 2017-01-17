import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
} from 'react-native';

import styles from '../../styles'
import colors from '../../colors'


class TakeOut extends Component {
  submitLoginInfo() {
    this.props.dispatch(pop())
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          TEST
        </Text>
      </View>
    );
  }
}


export default connect()(TakeOut)

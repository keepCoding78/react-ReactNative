import React, { Component } from 'react';
import { View } from 'react-native';
import { connect }  from 'react-redux';
import { appStyle } from '../styles/styles';
import Header     from '../components/Header';
import IncrementView from '../components/IncrementView';
// actions
import {
  counterIncrement,
  counterDecrement,
} from '../../actions/CounterAction';

/** The app entry point */
class App extends Component {
  render() {
    return (
      <View style={appStyle.reactNativeWeb}>
        <Header />
        <IncrementView
          {...this.props}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.CounterReducer.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(counterIncrement()),
  decrement: () => dispatch(counterDecrement()),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);


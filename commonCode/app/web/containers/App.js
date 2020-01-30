import React, { Component } from 'react';
import { connect } from 'react-redux';
// dumb components
import Header     from '../components/Header';
import IncrementView from '../components/IncrementView';
import { counterIncrement, counterDecrement } from '../../actions/CounterAction';


/** The app entry point */
class App extends Component {
  render() {
    // injected by connect call
    const { count, increment } = this.props;

    return (
      <div className="react-native-web">
          <Header />
        <IncrementView
         {...this.props}
        />
      </div>
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


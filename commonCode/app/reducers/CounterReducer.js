import Actions from '../actions/ActionTypes';

const CounterReducer = (state = { count: 3000 }, action) => {
  console.log('CounterReducer', action);

  switch (action.type) {
    case Actions.INCREMENT_COUNTER:
      return { count: state.count + 1 };
    case Actions.DECREMENT_COUNTER:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default CounterReducer;

import Actions from './ActionTypes';


export const counterIncrement = () => ({
  type: Actions.INCREMENT_COUNTER,
});

export const counterDecrement = () => ({
  type: Actions.DECREMENT_COUNTER,
});

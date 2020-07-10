import * as c from "./../actions/ActionTypes";

export default (state = 6, action) => {
  switch (action.type) {
    case c.INCREASE_ORDER:
      return state + 1;
    default:
      return state;
  }
}
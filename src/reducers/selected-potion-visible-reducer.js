import * as c from "./../actions/ActionTypes";

export default (state = null, action) => {
  const { name, price, duration, effect, stock, img, order, key, id } = action;
  switch (action.type) {
    default:
      return state;
  }
}
import * as c from "./../actions/ActionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case c.TOGGLE_CREATE_FORM:
      return !state;
    default:
      return false;
  }
}
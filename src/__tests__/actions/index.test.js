import * as a from "./../../actions/index";
import * as c from "./../../actions/ActionTypes";

describe('crafty brew actions', () => {
  test('toggleCreateForm should create a TOGGLE_CREATE_FORM aciton', () => {
    expect(a.toggleCreateForm()).toEqual({
      type: c.TOGGLE_CREATE_FORM
    })
  })
})
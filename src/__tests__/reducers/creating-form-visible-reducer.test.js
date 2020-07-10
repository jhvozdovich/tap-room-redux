import creatingFormVisibleReducer from "./../../reducers/creating-form-visible-reducer";
import * as c from "./../../actions/ActionTypes";

describe("creatingFormVisibleReducer", () => {
  test("returns default state if action type is null", () => {
    expect(creatingFormVisibleReducer(false, { type: null })).toEqual(false);
  })
})
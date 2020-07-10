import creatingFormVisibleReducer from "../../reducers/creating-form-visible-reducer";
import * as c from "../../actions/ActionTypes";

describe("creatingFormVisibleReducer", () => {
  test("returns default state if action type is null", () => {
    expect(creatingFormVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('toggles create form state between false and true', () => {
    expect(creatingFormVisibleReducer(false, { type: c.TOGGLE_CREATE_FORM })).toEqual(true);
  });
});
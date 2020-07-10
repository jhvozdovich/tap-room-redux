import updatingFormVisibleReducer from "./../../reducers/updating-form-visible-reducer";
import * as c from "./../../actions/ActionTypes";

describe("updatingFormVisibleReducer", () => {
  test("returns default state if action type is null", () => {
    expect(updatingFormVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('toggles update form state between false and true', () => {
    expect(updatingFormVisibleReducer(false, { type: c.TOGGLE_UPDATE_FORM })).toEqual(true);
  });
});
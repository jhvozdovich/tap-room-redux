import orderReducer from "../../reducers/order-reducer";
import * as c from "../../actions/ActionTypes";

describe("orderReducer", () => {
  test("returns default state if action type is null", () => {
    expect(orderReducer(null, { type: null })).toEqual(6);
  });
});
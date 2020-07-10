import orderReducer from "../../reducers/order-reducer";
import * as c from "../../actions/ActionTypes";

describe("orderReducer", () => {
  test("returns default state if action type is null", () => {
    expect(orderReducer(6, { type: null })).toEqual(6);
  });

  test('increments order by one', () => {
    expect(orderReducer(10, { type: c.INCREASE_ORDER })).toEqual(11);
  });
});
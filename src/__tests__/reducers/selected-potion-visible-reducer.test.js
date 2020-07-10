import selectedPotionReducer from "./../../reducers/selected-potion-visible-reducer";
import * as a from "./../../actions/index";

import Purple from "./../../img/Purple.gif";

describe("selectedPotionReducer", () => {
  let action;
  let currentState = {
    name: "Potion of Regeneration",
    price: 4,
    duration: "0:45",
    effect: "Restores 18 health over time",
    stock: 10,
    img: Purple,
    order: 0,
    key: 0,
    id: "0"
  }

  test("returns default without recognized action type", () => {
    expect(selectedPotionReducer(null, { type: null })).toEqual(null);
  });

  test("should select potion based on input", () => {
    action = a.selectPotion({
      name: "Potion of Regeneration",
      price: 4,
      duration: "0:45",
      effect: "Restores 18 health over time",
      stock: 10,
      img: Purple,
      order: 0,
      key: 0,
      id: "0"
    });
    expect(selectedPotionReducer(null, action)).toEqual({
      name: "Potion of Regeneration",
      price: 4,
      duration: "0:45",
      effect: "Restores 18 health over time",
      stock: 10,
      img: Purple,
      order: 0,
      key: 0,
      id: "0"
    });
  });

  test("should toggle to null if potion is already selected", () => {
    action = a.selectPotion(currentState)
    expect(selectedPotionReducer(currentState, action)).toEqual(null);
  });
});
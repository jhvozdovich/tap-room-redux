import selectedPotionReducer from "./../../reducers/selected-potion-visible-reducer";
import * as a from "./../../actions/index";
import * as c from "./../../actions/ActionTypes"

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
    expect(selectedPotionReducer("off", { type: null })).toEqual("off");
  })

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
    })
    expect(selectedPotionReducer("off", action)).toEqual({
      name: "Potion of Regeneration",
      price: 4,
      duration: "0:45",
      effect: "Restores 18 health over time",
      stock: 10,
      img: Purple,
      order: 0,
      key: 0,
      id: "0"
    })
  })

  test("should toggle to null if potion is already selected", () => {
    action = a.selectPotion(currentState);
    console.log("__________" + selectedPotionReducer(currentState, action))
    expect(selectedPotionReducer(currentState, action).toEqual("off"));
  })
})
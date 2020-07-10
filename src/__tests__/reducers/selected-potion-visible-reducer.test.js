import selectedPotionReducer from "./../../reducers/selected-potion-visible-reducer";
import * as a from "./../../actions/index";
import * as c from "./../../actions/ActionTypes"

import Indigo from "./../../img/Indigo.gif";
import Purple from "./../../img/Purple.gif";

describe("selectedPotionReducer", () => {
  let action;
  let currentState = {
    "0": {
      name: "Potion of Regeneration",
      price: 4,
      duration: "0:45",
      effect: "Restores 18 health over time",
      stock: 10,
      img: Purple,
      order: 0,
      key: 0,
      id: "0"
    },
    "1": {
      name: "Potion of Night Vision",
      price: 6,
      duration: "3:00",
      effect: "Visually brightens everything to a light level of 15",
      stock: 5,
      img: Indigo,
      order: 1,
      key: 1,
      id: "1"
    }
  }

  test("returns default without recognized action type", () => {
    expect(selectedPotionReducer(null, { type: null })).toEqual(null);
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
    })
  })
})
import { createStore } from "redux";
import creatingFormVisibleReducer from "./../../reducers/creating-form-visible-reducer";
import potionListReducer from "./../../reducers/potion-list-reducer";
import selectedPotionVisibleReducer from "./../../reducers/selected-potion-visible-reducer";
import updatingFormVisibleReducer from "./../../reducers/updating-form-visible-reducer";
import rootReducer from "./../../reducers/index";
import * as a from "./../../actions/index";

import Indigo from "./../../img/Indigo.gif";
import Purple from "./../../img/Purple.gif";
import Pink from "./../../img/Pink.gif";
import LightBlue from "./../../img/LightBlue.gif";
import Lavendar from "./../../img/Lavendar.gif";
import PaleGreen from "./../../img/PaleGreen.gif";

let store = createStore(rootReducer);

const defaultData = {
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
  },
  "2": {
    name: "Potion of Fire Resistance",
    price: 8,
    duration: "3:00",
    effect: "Gives immunity to damage from fire, lava, magma blocks, campfires, and blazes' ranged attacks.",
    stock: 15,
    img: Pink,
    order: 2,
    key: 2,
    id: "2"
  },
  "3": {
    name: "Potion of Swiftness",
    price: 3,
    duration: "3:00",
    effect: "Increases movement speed, sprinting speed, and jumping length by 20%.",
    stock: 0,
    img: LightBlue,
    order: 3,
    key: 3,
    id: "3"
  },
  "4": {
    name: "Potion of Invisibility",
    price: 10,
    duration: "3:00",
    effect: "Renders the player invisible.",
    stock: 12,
    img: Lavendar,
    order: 4,
    key: 4,
    id: "4"
  },
  "5": {
    name: "Potion of Luck",
    price: 2,
    duration: "5:00",
    effect: "Increases the luck attribute by 1 point.",
    stock: 1,
    img: PaleGreen,
    order: 5,
    key: 5,
    id: "5"
  }
}

describe("rootReducer", () => {
  test("returns default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      creatingFormVisible: false,
      potionList: defaultData,
      selectedPotionVisible: null,
      updatingFormVisible: false
    })
  })

  test("initial potionListReducer matches root reducer", () => {
    expect(store.getState().potionList).toEqual(potionListReducer(undefined, { type: null }));
  })
})

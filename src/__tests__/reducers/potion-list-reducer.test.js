import potionListReducer from "../../reducers/potion-list-reducer";
import * as a from "./../../actions/index";
import * as c from "./../../actions/ActionTypes";

import Indigo from "./../../img/Indigo.gif";
import Purple from "./../../img/Purple.gif";
import Pink from "./../../img/Pink.gif";
import LightBlue from "./../../img/LightBlue.gif";
import Lavendar from "./../../img/Lavendar.gif";
import PaleGreen from "./../../img/PaleGreen.gif";

describe("potionListReducer", () => {
  const defaultData = {
    0: {
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
    1: {
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
    2: {
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
    3: {
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
    4: {
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
    5: {
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

  const potionData = {
    name: "Potion of Water Breathing",
    price: 5,
    duration: "3:00",
    effect: "Prevents the oxygen bar from depleting when underwater.",
    stock: 12,
    img: Purple,
    order: 6,
    key: 6,
    id: "6"
  }

  const potionDataUpdate = {
    name: "Potion of Water Breathing",
    price: 5,
    duration: "3:00",
    effect: "Prevents the oxygen bar from depleting when underwater.",
    stock: 0,
    img: Purple,
    order: 6,
    key: 6,
    id: "6"
  }

  let action;

  test("returns default state if no action type is passed to reducer", () => {
    expect(potionListReducer(defaultData, { type: null })).toEqual(defaultData);
  });

  test("should add new potion to potion list", () => {
    const { name, price, duration, effect, stock, img, order, key, id } = potionData;
    action = a.addPotion({
      name: name,
      price: price,
      duration: duration,
      effect: effect,
      stock: stock,
      img: img,
      order: order,
      key: key,
      id: id
    });

    expect(potionListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        price: price,
        duration: duration,
        effect: effect,
        stock: stock,
        img: img,
        order: order,
        key: key,
        id: id
      }
    });
  });

  test("should update potion data with new potion", () => {
    const { name, price, duration, effect, stock, img, order, key, id } = potionData;
    const { name2, price2, duration2, effect2, stock2, img2, order2, key2, id2 } = potionDataUpdate;
    const currentState = {
      [id]: {
        name: name,
        price: price,
        duration: duration,
        effect: effect,
        stock: stock,
        img: img,
        order: order,
        key: key,
        id: id
      }
    }
    action = a.addPotion({
      name: name2,
      price: price2,
      duration: duration2,
      effect: effect2,
      stock: stock2,
      img: img2,
      order: order2,
      key: key2,
      id: id2
    })
    expect(potionListReducer(currentState, action)).toEqual({
      [id2]: {
        name: name2,
        price: price2,
        duration: duration2,
        effect: effect2,
        stock: stock2,
        img: img2,
        order: order2,
        key: key2,
        id: id2
      }
    })
  })
});
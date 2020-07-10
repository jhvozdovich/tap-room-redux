import * as c from "./../actions/ActionTypes";

import Indigo from "../img/Indigo.gif";
import Purple from "../img/Purple.gif";
import Pink from "../img/Pink.gif";
import LightBlue from "../img/LightBlue.gif";
import Lavendar from "../img/Lavendar.gif";
import PaleGreen from "../img/PaleGreen.gif";

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

export default (state = defaultData, action) => {
  const { name, price, duration, effect, stock, img, order, key, id } = action;
  switch (action.type) {
    case c.ADD_POTION:
      return Object.assign({}, state, {
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
    default:
      return state;
  }
}
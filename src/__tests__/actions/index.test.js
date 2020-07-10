import * as a from "./../../actions/index";
import * as c from "./../../actions/ActionTypes";

import Purple from "./../../img/Purple.gif";

describe("crafty brew actions", () => {
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

  test("toggleCreateForm should create a TOGGLE_CREATE_FORM action", () => {
    expect(a.toggleCreateForm()).toEqual({
      type: c.TOGGLE_CREATE_FORM
    });
  });

  test("toggleUpdateForm should create a TOGGLE_UPDATE_FORM action", () => {
    expect(a.toggleUpdateForm()).toEqual({
      type: c.TOGGLE_UPDATE_FORM
    });
  });

  test("addPotion should create an ADD_POTION action", () => {
    expect(a.addPotion(potionData)).toEqual({
      type: c.ADD_POTION,
      name: "Potion of Water Breathing",
      price: 5,
      duration: "3:00",
      effect: "Prevents the oxygen bar from depleting when underwater.",
      stock: 12,
      img: Purple,
      order: 6,
      key: 6,
      id: "6"
    });
  });

  test("deletePotion should create a DELETE_POTION action", () => {
    expect(a.deletePotion("1")).toEqual({
      type: c.DELETE_POTION,
      id: "1"
    });
  });

});
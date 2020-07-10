import * as c from "./../actions/ActionTypes";

export default (state = "off", action) => {
  const { name, price, duration, effect, stock, img, order, key, id } = action;
  switch (action.type) {
    case c.SELECT_POTION:
      if (state === "off") {
        return {
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
      } else {
        return "off";
      }
    default:
      return state;
  }
}
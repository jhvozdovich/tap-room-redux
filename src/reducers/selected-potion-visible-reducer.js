import * as c from "./../actions/ActionTypes";

export default (state = null, action) => {
  const { name, price, duration, effect, stock, img, order, key, id } = action;
  switch (action.type) {
    case c.SELECT_POTION:
      if (state === null) {
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
        return null;
      }
    default:
      return state;
  }
}
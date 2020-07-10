import * as c from "./ActionTypes";

export const toggleCreateForm = () => ({
  type: c.TOGGLE_CREATE_FORM
});

export const toggleUpdateForm = () => ({
  type: c.TOGGLE_UPDATE_FORM
});

export const addPotion = (potion) => {
  const { name, price, duration, effect, stock, img, order, key, id } = potion;
  return {
    type: c.ADD_POTION,
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

export const deletePotion = (id) => ({
  type: c.DELETE_POTION,
  id
});

export const selectPotion = (potion) => {
  if (potion !== null) {
    const { name, price, duration, effect, stock, img, order, key, id } = potion;
    return {
      type: c.SELECT_POTION,
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
    return {
      type: c.SELECT_POTION
    }
  }
}
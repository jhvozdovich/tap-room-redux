import creatingFormVisibleReducer from "./creating-form-visible-reducer";
import potionListReducer from "./potion-list-reducer";
import selectedPotionVisibleReducer from "./selected-potion-visible-reducer";
import updatingFormVisibleReducer from "./updating-form-visible-reducer";
import orderReducer from "./order-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  creatingFormVisible: creatingFormVisibleReducer,
  potionList: potionListReducer,
  selectedPotionVisible: selectedPotionVisibleReducer,
  updatingFormVisible: updatingFormVisibleReducer,
  order: orderReducer
});

export default rootReducer;

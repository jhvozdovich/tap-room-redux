import React from "react";
import PotionList from "./PotionList";
import NewPotionForm from "./NewPotionForm";
import PotionDetail from "./PotionDetail";
import EditPotionForm from "./EditPotionForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from "./../actions/index"

function PotionControl(props) {
  const { creatingFormVisible, potionList, selectedPotionVisible, updatingFormVisible } = props;

  const handleCreatingFormVisible = () => {
    const { dispatch } = props;
    const action = a.toggleCreateForm();
    dispatch(action);
  }

  const handleAddingNewPotion = (newPotion) => {
    const { dispatch } = props;
    const action = a.toggleCreateForm();
    dispatch(action);
    const action2 = a.addPotion(newPotion);
    dispatch(action2);
  }

  const handleSelectedPotion = (id) => {
    const { dispatch } = props;
    const selectedPotion = Object.values(potionList).filter(potion => potion.id === id)[0]
    const action = a.selectPotion(selectedPotion)
    dispatch(action);
  }

  const handleSelectedPotionRefresh = () => {
    const { dispatch } = props;
    const action = a.selectPotion(null);
    dispatch(action);
  }

  const handleUpdatingFormVisible = () => {
    const { dispatch } = props;
    const action = a.toggleUpdateForm();
    dispatch(action);
  }

  const handleUpdatingPotion = (potionToUpdate) => {
    const { dispatch } = props;
    const action = a.toggleUpdateForm();
    dispatch(action);
    const action2 = a.addPotion(potionToUpdate);
    dispatch(action2);
    handleSelectedPotionRefresh();
  }

  const handleDeletingPotion = (id) => {
    const { dispatch } = props;
    const action = a.deletePotion(id);
    dispatch(action);
    handleSelectedPotionRefresh()
  }

  const handleBuyingPotion = (id) => {
    const purchasedPotion = potionList[id];
    if (purchasedPotion.stock > 0) {
      purchasedPotion.stock -= 1;
      const { dispatch } = props;
      const action = a.addPotion(purchasedPotion);
      dispatch(action);
    }
  }

  const handleRestockingPotion = (id) => {
    const restockedPotion = potionList[id];
    restockedPotion.stock += 10;
    const { dispatch } = props;
    const action = a.addPotion(restockedPotion);
    dispatch(action);
  }

  let currentlyVisibleState = null;
  let navButton = null;
  if (updatingFormVisible) {
    currentlyVisibleState = <EditPotionForm
      potion={selectedPotionVisible}
      onEditPotion={handleUpdatingPotion} />
    navButton = <button onClick={handleUpdatingFormVisible}>Back to Potion</button>
  } else if (selectedPotionVisible !== null) {
    currentlyVisibleState = <PotionDetail
      potion={selectedPotionVisible}
      onClickingUpdate={handleUpdatingFormVisible}
      onClickingDelete={handleDeletingPotion}
      onClickingBuy={handleBuyingPotion}
      onClickingRestock={handleRestockingPotion} />
    navButton = <button onClick={handleSelectedPotionRefresh}>Back to List</button>
  } else if (creatingFormVisible) {
    currentlyVisibleState = <NewPotionForm onNewPotionCreation={handleAddingNewPotion} />
    navButton = <button onClick={handleCreatingFormVisible}>Back to List</button>
  } else {
    currentlyVisibleState = <PotionList
      potionList={potionList}
      onPotionSelection={handleSelectedPotion} />
    navButton = <button onClick={handleCreatingFormVisible}>Add Potion</button>
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      {navButton}
    </React.Fragment>
  )
}

PotionControl.propTypes = {
  creatingFormVisible: PropTypes.bool,
  potionList: PropTypes.object,
  selectedPotionVisible: PropTypes.object,
  updatingFormVisible: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    creatingFormVisible: state.creatingFormVisible,
    potionList: state.potionList,
    selectedPotionVisible: state.selectedPotionVisible,
    updatingFormVisible: state.updatingFormVisible
  }
}

PotionControl = connect(mapStateToProps)(PotionControl);

export default PotionControl;
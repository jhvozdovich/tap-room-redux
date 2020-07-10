import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPotionForm(props) {
  const { potion } = props;
  function handleEditPotionForm(event) {
    event.preventDefault();
    if (event.target.name.value === "") {
      event.target.name.value = potion.name;
    }
    if (event.target.price.value === "") {
      event.target.price.value = potion.price;
    }
    if (event.target.duration.value === "") {
      event.target.duration.value = potion.duration;
    }
    if (event.target.effect.value === "") {
      event.target.effect.value = potion.effect;
    }
    if (event.target.stock.value === "") {
      event.target.stock.value = potion.stock;
    }
    props.onEditPotion({
      name: event.target.name.value,
      price: parseInt(event.target.price.value),
      duration: event.target.duration.value,
      effect: event.target.effect.value,
      stock: parseInt(event.target.stock.value),
      img: event.target.img.value,
      id: potion.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditPotionForm}
        buttonText="Update Potion" />
    </React.Fragment>
  )
}

EditPotionForm.propTypes = {
  onEditPotion: PropTypes.func
}

export default EditPotionForm;
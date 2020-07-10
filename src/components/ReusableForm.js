import React from "react";
import PropTypes from "prop-types";

import Indigo from "../img/Indigo.gif";
import Lavendar from "../img/Lavendar.gif";
import LightBlue from "../img/LightBlue.gif";
import Magenta from "../img/Magenta.gif";
import PaleGreen from "../img/PaleGreen.gif";
import Pink from "../img/Pink.gif";
import Purple from "../img/Purple.gif";

function ReusableForm(props) {
  let nameInput;
  if (props.buttonText === "Update Potion") {
    nameInput = <input
      type="text"
      name="name"
      placeholder="Potion Name" />
  } else {
    nameInput = <input
      type="text"
      required
      name="name"
      placeholder="Potion Name" />
  }
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        {nameInput}
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price" />
        <br />
        <input
          type="text"
          name="duration"
          placeholder="Effect Duration" />
        <br />
        <textarea
          type="text"
          name="effect"
          placeholder="Effect Description" />
        <br />
        <input
          type="number"
          name="stock"
          placeholder="Stock" />
        <br />
        <select
          name="img"
          placeholder="Potion Color">
          <option value={Indigo}>Indigo</option>
          <option value={Lavendar}>Lavendar</option>
          <option value={LightBlue}>Light Blue</option>
          <option value={Magenta}>Magenta</option>
          <option value={PaleGreen}>Pale Green</option>
          <option value={Pink}>Pink</option>
          <option value={Purple}>Purple</option>
        </select>
        <br />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;
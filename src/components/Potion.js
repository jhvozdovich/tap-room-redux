import React from "react";
import PropTypes from "prop-types";

function Potion(props) {
  let priceDisplay;
  if (isNaN(props.price)) {
    priceDisplay = "Unknown";
  } else {
    priceDisplay = props.price
  }

  let stockWarningColor = {
    color: "black"
  }
  if (props.stock === 0 || isNaN(props.stock)) {
    stockWarningColor = {
      color: "darkred"
    }
  } else if (props.stock < 10) {
    stockWarningColor = {
      color: "saddlebrown"
    }
  }

  return (
    <React.Fragment>
      <div className="potion" onClick={() => props.whenPotionClicked(props.id)}>
        <h4 style={stockWarningColor}>{props.name}</h4>
        <p>Price: {priceDisplay} Gold Ingots</p>
        <img className="potion-img" src={props.img} alt="potion gif" />

      </div>
    </React.Fragment>
  )
}

Potion.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  id: PropTypes.string,
  whenPotionClicked: PropTypes.func
}

export default Potion;
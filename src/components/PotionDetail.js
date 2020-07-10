import React from "react";
import PropTypes from "prop-types";

function PotionDetail(props) {
  const { potion, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  let stockDisplay;
  if (potion.stock > 0) {
    stockDisplay = potion.stock;
  } else {
    stockDisplay = "Out of Stock!";
  }

  let lowStockDisplayWarning;
  let stockWarningColor = {
    color: "black"
  }
  if (potion.stock === 0 || isNaN(potion.stock)) {
    lowStockDisplayWarning = null;
    stockWarningColor = {
      color: "darkred"
    }
  } else if (potion.stock >= 10) {
    lowStockDisplayWarning = null;
  } else {
    lowStockDisplayWarning = "Almost Out!";
    stockWarningColor = {
      color: "saddlebrown"
    }
  }

  let priceDisplay;
  if (isNaN(potion.price)) {
    priceDisplay = "Unknown";
  } else {
    priceDisplay = potion.price
  }

  let durationDisplay;
  if (potion.duration === "") {
    durationDisplay = "Unknown";
  } else {
    durationDisplay = potion.duration
  }

  let effectDisplay;
  if (potion.effect === "") {
    effectDisplay = "Unknown";
  } else {
    effectDisplay = potion.effect
  }
  return (
    <React.Fragment>
      <div className="detail-page">
        <h3 style={stockWarningColor}>{potion.name} Stats</h3>
        <img className="potion-img" src={potion.img} alt="Potion gif" />
        <p>Price: {priceDisplay} Gold Ingots</p>
        <p>Duration: {durationDisplay}</p>
        <p>Effect: {effectDisplay}</p>
        <p style={stockWarningColor}> Stock: {stockDisplay} {lowStockDisplayWarning}</p>
        <button onClick={() => onClickingBuy(potion.id)}>Purchase Potion</button>
        <button onClick={() => onClickingRestock(potion.id)}>Restock Potion</button>
        <br />
        <button onClick={props.onClickingUpdate}>Update Potion</button>
        <button onClick={() => onClickingDelete(potion.id)}>Delete Potion</button>
        <br />
      </div>
    </React.Fragment>
  )
}

PotionDetail.propTypes = {
  potion: PropTypes.object,
  onClickingUpdate: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
}

export default PotionDetail;
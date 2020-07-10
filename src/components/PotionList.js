import React from "react";
import Potion from "./Potion";
import PropTypes from "prop-types";

function PotionList(props) {
  let instructionText;
  if (props.potionList.length === 0) {
    instructionText = "You have no potions! Add a few!";
  } else {
    instructionText = "Click a potion for more information.";
  }

  return (
    <React.Fragment>
      <h4>{instructionText}</h4>
      <div className="potion-list">
        {Object.values(props.potionList)
          .sort(function (a, b) {
            return a.order - b.order;
          })
          .map((potion) =>
            <Potion
              whenPotionClicked={props.onPotionSelection}
              name={potion.name}
              price={potion.price}
              duration={potion.duration}
              effect={potion.effect}
              stock={potion.stock}
              img={potion.img}
              order={potion.order}
              id={potion.id}
              key={potion.id} />
          )}
      </div>
    </React.Fragment>
  )
}

PotionList.propTypes = {
  potionList: PropTypes.object,
  onPotionSelection: PropTypes.func
}

export default PotionList;
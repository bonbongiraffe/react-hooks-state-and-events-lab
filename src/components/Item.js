import React, { useState } from "react";

function Item({ name, category }) {
  let [inCart, cartSetter] = useState(0)
  const itemClass = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"
  function toggleCart(){
    cartSetter(inCart = !inCart)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleCart} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;

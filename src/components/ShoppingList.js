import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, filterSetter] = useState("All")
  console.log(selectedCategory)
  function updateFilter(searchVal){
    filterSetter(selectedCategory = searchVal)
  }
  const renderAll = items.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))
  const renderFiltered = items.filter((item) => (item.category === selectedCategory))
  .map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => updateFilter(e.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {(selectedCategory === "All" ? renderAll : renderFiltered)}        
      </ul>
    </div>
  );
}

export default ShoppingList;

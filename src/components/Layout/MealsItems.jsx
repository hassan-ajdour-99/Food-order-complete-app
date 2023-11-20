import React from "react";
import { currencyFormatter } from "../util/Formatting.js";

function MealsItems({ product }) {
  return (
    <li className="meal-item">
      <article>
        <img
          src={`http://localhost:3000/${product.image}`}
          alt={product.name}
        />
        <div>
          <h3>{product.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(product.price)}
          </p>
          <p className="meal-item-description"> {product.description}</p>
        </div>
        <p className="meal-item-price">
          <button> Add to Cart </button>
        </p>
      </article>
    </li>
  );
}

export default MealsItems;

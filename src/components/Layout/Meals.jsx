import { useState, useEffect } from "react";
import "../../index.css";

function Meals() {
  const [getMealsData, setGetMealsData] = useState([]);

  // Fertch DATA MEAALS
  useEffect(() => {
    async function fetchDataMeals() {
      const response = await fetch("http://localhost:3000/meals");

      // ...
      if (!response.ok) {
        //....
      }

      const data = await response.json();

      setGetMealsData(data);
    }

    fetchDataMeals();
  }, []);

  return (
    <ul id="meals">
      {getMealsData.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}

export default Meals;

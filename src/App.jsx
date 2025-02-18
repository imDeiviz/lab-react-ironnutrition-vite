import { useState } from "react";
import "./App.css";

import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const onDeleteFood = (food) => {
    const foodsWithoutFood = foods.filter((f) => f.id !== food.id);
    setFoods(foodsWithoutFood);
  };

  const onAddFood = (food) => {
    setFoods([food, ...foods]);
  };

  const foodBoxes = foods.map((food) => (
    <FoodBox key={food.id} food={food} onDeleteFood={onDeleteFood} />
  ));

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center display-4">IronNutrition</h1>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 offset-md-3">
          <AddFoodForm onAddFood={onAddFood} />
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {foodBoxes}
      </div>
    </div>
  );
}

export default App;

// Your code here

import { useState } from "react";

const initialData = {
  name: "",
  image: "",
  calories: "",
  servings: 0,
};

function AddFoodForm({ onAddFood }) {
  const [data, setData] = useState(initialData);

  const onSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      ...data,
      id: uuidv4(),
    };

    onAddFood(newFood);

    setData(initialData);
  };

  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={onSubmit} className="border p-4 rounded shadow">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          id="name" 
          name="name" 
          value={data.name} 
          onChange={onChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="image" className="form-label">Image URL</label>
        <input 
          id="image" 
          name="image" 
          value={data.image} 
          onChange={onChange}
          className="form-control"
          type="url"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="calories" className="form-label">Calories</label>
        <input
          type="number"
          min="0"
          id="calories"
          name="calories"
          value={data.calories}
          onChange={onChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="servings" className="form-label">Servings</label>
        <input
          type="number"
          min="0"
          id="servings"
          name="servings"
          value={data.servings}
          onChange={onChange}
          className="form-control"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Add Food</button>
    </form>
  );
}

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

export default AddFoodForm;

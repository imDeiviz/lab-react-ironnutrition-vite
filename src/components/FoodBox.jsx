function FoodBox({ food, onDeleteFood }) {
  return (
    <div className="card mb-4 shadow-sm" style={{ width: '18rem' }}>
      <img src={food.image} className="card-img-top" alt={food.name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text">Calories: {food.calories}</p>
        <p className="card-text">Servings: {food.servings}</p>
        <p className="card-text">
          <strong>Total Calories: {food.calories * food.servings}</strong> kcal
        </p>
        <button
          className="btn btn-danger w-100"
          onClick={() => {
            onDeleteFood(food);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default FoodBox;

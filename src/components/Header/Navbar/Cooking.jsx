function Cooking() {
  return (
    <div className="container">
      <div className="firstSection">
        <h1>Cooking</h1>
        <p>
          Recipes, advice and inspiration for everyday cooking, special
          occasions and more.
        </p>
      </div>

      <div className="secondSection">
        <h2>Recipes</h2>
        <ul className="recipesElements">
          <li>Easy</li>
          <li>Dinner</li>
          <li>Quick</li>
          <li>Healthy</li>
          <li>Breakfast</li>
          <li>Vegetarian</li>
          <li>Vegan</li>
          <li>Chicken</li>
          <li>Pasta</li>
          <li>Dessert</li>
        </ul>
      </div>

      <div className="thirdSection">
        <h2>Editor's Picks</h2>
        <ul className="editorPicksElements">
          <li>Easy Salmon Recipes</li>
          <li>Soup and Stew Recipes</li>
          <li>Easy Weeknight</li>
          <li>Newest Recipes</li>
          <li>Cheap and Easy Dinner Ideas</li>
          <li>Slow Cooker Recipes</li>
          <li>Healthy Breakfast Ideas</li>
        </ul>
      </div>
    </div>
  );
}

export default Cooking;

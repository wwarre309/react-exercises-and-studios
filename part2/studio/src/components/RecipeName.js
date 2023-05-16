import recipedata from "./recipe.json";

function RecipeName() {
  const recipeName = recipedata.map((data) => (
    <div key={data.name}>
      <h1>{data.name}</h1>
    </div>
  ));
  return <div>{recipeName}</div>;
}

export default RecipeName;
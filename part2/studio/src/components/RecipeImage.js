import recipedata from './recipe.json'

function RecipeImage() {
  const recipeName = recipedata.map((data) => (
    <div key ={data.name}>
      <h1>{recipedata.name}</h1>
    </div>
  ))
   return <div>{recipeName}</div>;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 
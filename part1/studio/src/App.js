import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description.js';
import RecipeIngredients from './components/Ingredients.js';
import RecipePhoto from './components/Photos';

function App() {
  return (
    <div className="App">
      <div classname="recipePhotoBlock">
        <RecipePhoto />
      </div>
      <div>
        <RecipeDecription />
        <RecipeIngredients />
      </div>
    </div>
  );
}

export default App;

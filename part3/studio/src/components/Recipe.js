const RecipeAuthor = () => {
   let authorLink = "https://iheartrecipes.com";
   let authorPhoto = "https://iheartrecipes.com/wp-content/uploads/2023/05/iheart-about.jpg";
   let authorName = "Rosie Mayes";

   return (
      <div>
         <img src={authorPhoto} alt = "Rosie Mayes" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Beef Oxtail", 
   "Flour",
   "Worcestershire Sauce", 
   "Kosher Salt & Black Pepper", 
   "Vegetable Oil", 
   "Beef Broth", 
   "Onions", 
   "Garlic"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://iheartrecipes.com/wp-content/uploads/2016/07/IMG_8742_wm-1536x1023.jpg" alt="Smothered Oxtail" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
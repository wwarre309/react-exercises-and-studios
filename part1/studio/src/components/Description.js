import syles from './Description.module.css';
import React from 'react';



function RecipeAuthor() {
    const authorLink = "https://iheartrecipes.com/"
    const authorPhoto = "https://iheartrecipes.com/wp-content/uploads/2023/05/iheart-about.jpg"
    const authorName = "Rosie Mayes"

    return (
    <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Rosie Mayes Photo" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>iHeart Recipes</a> 
      </div>
    </div>
    )

};

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Southern Slow Cooker Smothered Oxtail</h1>
                    <p>Southern Style slow cooker oxtail smothered in homemade onion & garlic gravy</p>
            </div>
            <RecipeAuthor />
         </div>
        )
    }
};

export default RecipeDescription;
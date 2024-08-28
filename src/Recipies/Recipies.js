import { useEffect, useState } from 'react';
import './Recipies.css';
import video from '../Recipies/chef.mp4';
import MyRecipiesComponent from '../Recipies/MyRecipiesComponent';

function Recipies() {
 
const MY_ID = "08474f4c";
const MY_KEY = "58962dc77ff383b58b5c018caf02ac99";
const [mySearch, setMySearch] = useState("");
const [myRecipies, setMyRecipies] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState ("vegetables");

useEffect(() => {
const getRecipe = async() => {
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  setMyRecipies(data.hits);
}
getRecipe()
}, [wordSubmitted])

const myRecipySearch = (e) => {
setMySearch (e.target.value);
}
const finalSearch = (e) => {
  e.preventDefault()
  setWordSubmitted(mySearch)
}
  return (
    <div className="Recipies">

    <div className='container'>
<video autoPlay muted loop>
  <source src={video} type = "video/mp4"/>
  </video>
  <h1 className='findRecipe'>Find a recipe</h1>
      </div>
     
      <div className='container'>
     <form onSubmit={finalSearch}>
         <input className='search' onChange={myRecipySearch} value={mySearch}/>
    </form>
     <button className='recipiesbtn' onClick={finalSearch}>
         <img src="https://img.icons8.com/?size=100&id=112468&format=png&color=000000" className='icon' alt="icon"/>
      </button>
</div>
<div>
{myRecipies.map((element, index) =>(
<MyRecipiesComponent key={index}
  label = {element.recipe.label}
  image = {element.recipe.image}
  calories = {element.recipe.calories}
  ingredients = {element.recipe.ingredientLines}
/>
))}
</div>

    </div>
  );
}

export default Recipies;

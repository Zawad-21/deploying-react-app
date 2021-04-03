import "./App.css";
import React, { useEffect, useState } from 'react';
import Recipe from "./recipe";

function App() {

  const APP_ID = '2a4e6bc3'
  const APP_KEYS = 'e3987cbba01151da7bac1429610bfc49'
  //const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}&from=0&to=10&calories=591-722&health=alcohol-free`

  const [recipes, setRecipies] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}&from=0&to=100&health=alcohol-free&mealType=lunch`)
    const data = await response.json()
    setRecipies(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <h1>Search for any recipe you like!</h1>
      <h5>(i.e. search 'shrimp')</h5>
      <form onSubmit={getSearch} className='search-form' action="">
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe ingredients={recipe.recipe.ingredients} key={recipe.key} title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image}/>
          
        ))}
      </div>
    </div>
  );
}

export default App;

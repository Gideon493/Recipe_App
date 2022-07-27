

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

import NewRecipes from './components/NewRecipes';
import Recipes from './components/Recipes';
import Home from './components/Home';
import Recipe from './components/Recipe';
import NewRecipe from './components/NewRecipe';




function App() {
  const [recipes, setRecipes] = useState([])
  const [newrecipes, setNewRecipes] = useState([])
  //const [count, setCount] = useState(2)
  //const [times, setTimes] = setTimes("")
  //const [removeSignIn, setRemoveSignIn] = useState(false)
  //const [removeSignUp, setRemoveSignUp] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:2020/recipes')
        .then(res => {
          return res.json()
        })
        .then((data) => {
          setRecipes(data)
        });

      fetch('http://localhost:2021/Recipes')
        .then(res => {
          return res.json()
        })
        .then((data) => {
          setNewRecipes(data)

        });



    }, 1000);

  }, [])
  return (
    <Router>

      <div className="App">
        <div>



          <div>
            <Switch>
              <Route exact path="/" component={Home}>
                <Home />
              </Route>
              <Route exact path="/recipes" component={Recipes}>
                <Recipes recipes={recipes} />
              </Route>
              <Route exact path='/newrecipes' component={NewRecipes}>
                <NewRecipes newrecipes={newrecipes} />
              </Route>
              <Route exact path="/recipes/:name" component={Recipe}>
                < Recipe recipes={recipes} />
              </Route>
              <Route exact path="/newrecipes/:name" component={NewRecipe}>
                <NewRecipe newrecipes={newrecipes} />
              </Route>
            </Switch>


          </div>

        </div>
      </div>
    </Router>

  );
}

export default App;

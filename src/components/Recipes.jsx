import { NavLink } from "react-router-dom";

const Recipes = ({ recipes }) => {
  return (
    <div>
      <div className="recipe">
        <NavLink to="/" className="btn btn-warning w-25 m-2">
          Back Home
        </NavLink>
        <NavLink to="/newrecipes" className="btn btn-warning w-25">
          View More Recipes
        </NavLink>
        <div className="row">
          <div className="col-3">
            {recipes.map((recipe) => {
              return (
                <div className="">
                  <div className="">
                    <div
                      className="card m-3 border-0"
                      style={{ width: "18rem" }}
                    >
                      <h5 className="card-title">{recipe.name}</h5>
                      <img src={recipe.imageURL} alt="" />
                      <div className="card-body">
                        <NavLink
                          to={`/recipes/${recipe.name}`}
                          className="btn btn-primary"
                        >
                          View Recipe
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;

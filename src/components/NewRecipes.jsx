import { NavLink } from "react-router-dom";

const NewRecipes = ({ newrecipes }) => {
  return (
    <div>
      <div>
        <div>
          <NavLink to="/" className="btn btn-warning w-25">
            Back Home
          </NavLink>
          
        </div>
        <div>
          {newrecipes.map((newrecipe) => {
            return (
              <div>
                <div>
                  <div>
                    <div className="card mb-3" style={{ width: "25rem" }}>
                      <img
                        src={newrecipe.image}
                        alt=""
                        className="card-img-top"
                        style={{
                          width: "300px",
                          height: "300px",
                          marginLeft: "3rem",
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{newrecipe.name}</h5>

                        <p className="card-text">{newrecipe.description}</p>
                        <p className="card-text"> {newrecipe.tag} </p>
                        <NavLink
                          to={`/newrecipes/${newrecipe.name}`}
                          className="btn btn-secondary"
                        >
                          View Recipe
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewRecipes;

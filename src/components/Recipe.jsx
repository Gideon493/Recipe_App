import { NavLink, useParams } from "react-router-dom";

const Recipe = ({ recipes }) => {
  const { name } = useParams();
  return (
    <div>
      <div>
        {recipes
          .filter((recipe) => recipe.name === name)
          .map((recipe, index) => (
            <div key={index}>
              <div>
                <div
                  class="card mb-3 border-0"
                  style={{ width: "80%", marginLeft: "10rem" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src={recipe.imageURL}
                        class="img-fluid rounded-start"
                        alt="..."
                        style={{
                          width: "500px",
                          height: "400px",
                          padding: "10px",
                          marginTop: "4rem",
                          marginLeft: "1rem",
                        }}
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title display-6">{recipe.name}</h5>
                        <p class="card-text">
                          <div>
                            <h4 className="lead display-6 text-secondary">
                              Ingredients:
                            </h4>
                            {recipe.ingredients.map((ingredient) => {
                              return (
                                <div>
                                  <p className="lead">
                                    <ul style={{ marginLeft: "3rem" }}>
                                      <li style={{ listStyleType: "circle" }}>
                                        {" "}
                                        {ingredient.quantity} {ingredient.name}({" "}
                                        {ingredient.type})
                                      </li>
                                    </ul>
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                          <h4 className="lead display-6 text-secondary">
                            Steps:
                          </h4>
                          <div className="lead">{recipe.steps}</div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div>
          <NavLink to="/recipes" className="btn btn-outline-secondary w-25">
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NewRecipe = ({ newrecipes }) => {
  const { name } = useParams();
  return (
    <div>
      <div>
        <div>
          {newrecipes
            .filter((newrecipe) => newrecipe.name === name)
            .map((newrecipe, index) => (
              <div key={index}>
                <div>
                  <div
                    class="card mb-3 border-0"
                    style={{ width: "80%", marginLeft: "10rem" }}
                  >
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img
                          src={newrecipe.image}
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
                          <h5 class="card-title display-6">{newrecipe.name}</h5>

                          <p class="card-text">
                            <div>
                              <h4 className="lead display-6 text-secondary">
                                Ingredients:
                              </h4>
                              <div className="lead">
                                {newrecipe.ingredient.map((ingredients) => {
                                  return (
                                    <div>
                                      <div>
                                        <p>
                                          <ul
                                            style={{ listStyleType: "square" }}
                                          >
                                            <li>
                                              {ingredients.name}
                                              {ingredients.unit}
                                              {ingredients.name}
                                            </li>
                                          </ul>
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            <h4 className="lead display-6 text-secondary">
                              Steps:
                            </h4>
                            <div className="lead">
                              {newrecipe.step.map((steps) => {
                                return (
                                  <div>
                                    <div>
                                      <ul style={{ listStyleType: "circle" }}>
                                        <li>{steps.description}</li>
                                      </ul>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div>
            <NavLink
              to="/newrecipes"
              className="btn btn-outline-secondary w-25"
            >
              Back
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRecipe;

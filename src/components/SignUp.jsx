import { useState } from "react";

const SignUp = ({ handleRemoveSignUp }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  return (
    <div>
      <div>
        <div>
          <div
            class="card shadow"
            style={{
              width: "25rem",
              position: "absolute",
              marginLeft: "-17rem",
              backgroundColor: "azure",
            }}
          >
            <div class="card-body">
              <br />
              <h3 class="card-title">Sign Up</h3>
              <br />
              <form action="">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                />
                <br />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                />
              </form>
              <br /> <br />
              <button class="btn btn-primary" onClick={handleRemoveSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

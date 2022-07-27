const SignIn = ({ handleRemoveSignIn }) => {
  return (
    <div>
      <div>
        <div className="signin">
          <div
            class="card shadow"
            style={{
              width: "25rem",
              backgroundColor: "azure",
              position: "absolute",
              marginLeft: "-17rem",
            }}
          >
            <div class="card-body">
              <br />
              <h3 class="card-title">Sign In</h3>
              <br />
              <form
                action="
              "
              >
                <label htmlFor="">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                />
                <br />
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                />
              </form>
              <br /> <br />
              <button class="btn btn-primary" onClick={handleRemoveSignIn}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

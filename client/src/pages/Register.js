import { useState } from "react";
import "./login.css";
function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  async function registerUser(event) {
    event.preventDefault();
    const response = fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await (await response).json();
    if (data.message) {
      window.location.href = "/login";
    } else {
      window.location.href = "/register";
    }
  }
  return (
    <div>
      <div className="container2">
        <div className="form-container sign-in-container">
          <form onSubmit={registerUser} className="form" id="register">
            <h1 className="form__title">Register</h1>
            <div className="form__input-group">
              <label htmlFor="username"> Username: </label>
              <input
                type="text"
                className="form__inputer"
                name="username"
                id="username"
                maxLength="40"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Name"
                required
              />
            </div>
            <div className="form__input-group">
              <label htmlFor="username"> --E-mail-- </label>
              <input
                className="form__input"
                name="username"
                id="usernamer"
                maxLength="20"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="email"
                required
              />
            </div>
            <div className="form__input-group">
              <label htmlFor="pass">Password: </label>
              <input
                type="password"
                className="form__input"
                name="pass"
                id="pass"
                maxLength="20"
                onChange={(e) => setpassword(e.target.value)}
                placeholder="password"
                required
              />
            </div>
            <button
              className="form__button"
              type="submit"
              value="Register"
              onClick={(e) => registerUser(e)}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>Please login with your personal info</p>
              <button
                className="form__button"
                id="signUp"
                onClick={(e) => (window.location = "/login")}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

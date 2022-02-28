import { useState } from "react";
import ".//login.css";
function App() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  async function loginUser(event) {
    event.preventDefault();
    const response = fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await (await response).json();
    console.log(data);
    if (data.user) {
      localStorage.setItem("token", data.user);
      window.location.href = "/expensetracker";
    } else {
      alert("login failed");
    }
  }
  return (
    <div>
      <div className="container2">
        <div className="form-container sign-in-container">
          <form onSubmit={loginUser} className="form" id="login">
            <h1 className="form__title">Login</h1>
            <div className="form__input-group">
              <label htmlFor="username">--E-mail-- </label>
              <input
                type="email"
                value={email}
                className="form__input"
                name="username"
                onChange={(e) => setemail(e.target.value)}
                id="username"
                maxLength="20"
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
                value={password}
                id="pass"
                onChange={(e) => setpassword(e.target.value)}
                maxLength="20"
                placeholder="password"
                required
              />
            </div>
            <div className="form__input-group">
              <button type="submit" className="form__button">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="form__button"
                id="signUp"
                onClick={(e) => (window.location = "/register")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

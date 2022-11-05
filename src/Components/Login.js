import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userAuthContext from "./Context/AuthUser";
import Navigation from "./Navigation";
import loginimg from ".//image/login.JPG";
import { Helmet } from "react-helmet-async";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const { setAuth } = useContext(userAuthContext);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess(true);
  };

  return (
    <>
      <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login page for fake user authentication. "/>
        <link rel="canonical" href="/Login"/>
      </Helmet>
        <header>
          <Navigation />
        </header>
      </div>
      {success ? (
        <section>
          <h3>
            You are logged in as, <span>{user}</span>.
          </h3>
          <br />
          <p>
            <Link className="link" to="/">
              Go to home page
            </Link>
          </p>
        </section>
      ) : (
        <div className="main">
          <div className="sub-main">
            <div className="imgs">
              <div className="container-image">
                <img src={loginimg} alt="loginimg" className="profile" />
              </div>
            </div>

            <div className="logginn-container">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  className="name"
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  className="name"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </div>
              <div className="button-container">
                <button className="login-button">Log In</button>
              </div>
            </form>
          </div>


          </div>
          
        </div>
      )}
    </>
  );
};
export default Login;

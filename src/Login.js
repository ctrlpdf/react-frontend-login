import React from "react";

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <div>
          Login
          <div>
            E-mail
            <input />
            Password
            <input />
            <button>Login</button>
          </div>
        </div>

        <div>
          Sign up
          <div>
            E-mail
            <input />
            Password
            <input />
            Confirm
            <input />
            <button>Submit</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;

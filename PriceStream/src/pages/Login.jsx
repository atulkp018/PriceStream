import React from "react";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Password:</label>
        <input type="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

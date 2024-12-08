import React from "react";

function Signup() {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Password:</label>
        <input type="password" name="password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;

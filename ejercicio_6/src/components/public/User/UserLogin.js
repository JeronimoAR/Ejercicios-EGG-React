import React from "react";

function UserLogin() {
  return (
    <div className="form">
      <form method="get">
        <h2>Ingresa tu nombre:</h2>
        <input type="text" placeholder="Name:" />
        <h2>Ingresa tu contraseña:</h2>
        <input type="text" placeholder="Password: " />
        <br />
        <input type="submit" className="form-btn"/>
      </form>
    </div>
  );
}

export default UserLogin;

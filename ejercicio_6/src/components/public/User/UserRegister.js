import React from 'react'
import { useUserForms } from '../../../hooks/CustomHooks'

function UserRegister() {
    const {form, setForm, handleChanges} = useUserForms();

  return (
    <div className="form">
      <form method="post">
        <h2>Ingresa tu nombre:</h2>
        <input type="text" placeholder="Name:" />
        <h2>Ingresa tu mail: </h2>
        <input type="email" name="mail" id="mail" placeholder='Mail:'/>
        <h2>Ingresa tu contraseña:</h2>
        <input type="password" placeholder="Password: " />
        <h2>Confirma tu contraseña</h2>
        <input type="password" placeholder="Password: " />
        <br />
        <input type="submit" className="form-btn"/>
      </form>
    </div>
  )
}

export default UserRegister

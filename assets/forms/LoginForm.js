import React, { useState } from "react";
import Notification from "../components/Notification";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function LoginForm() {

  const [logged, setLogged] = useState(false)
  const [formResponse, setFormResponse] = useState({})
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e, fieldName) => {
    setCredentials({
      ...credentials,
      [fieldName]: e.currentTarget.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post(`${window.location.origin}/api/login_check`, credentials, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setLogged(true)
      })
      .catch((error) => {
        setFormResponse({classname: "danger", message: error.response.data.message ?? error.response.data.detail})
      })
  }

  return (
    <>
      {logged && (
        <Navigate to={"/admin"} />
      )}

      {Object.keys(formResponse).length > 0 && (
        <Notification {...formResponse} />
      )}

      <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
        <div className={"form-field"}>
          <input 
            type={"email"} 
            value={credentials.email} 
            placeholder={"Your username ..."} 
            onChange={(e) => handleChange(e, "email")}
            required 
          />
        </div>
        
        <div className={"form-field"}>
          <input
            type={"password"}
            value={credentials.password}
            placeholder={"Your password ..."}
            onChange={(e) => handleChange(e, "password")}
            required
          />
        </div>
        
        <div className={"form-button txt-right"}>
          <button className={"btn btn-secondary btn-xl"} type={"submit"}>Login</button>
        </div>
      </form>
    </>
  )
}
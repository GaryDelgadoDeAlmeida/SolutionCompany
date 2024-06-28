import React, { useState } from "react";
import Notification from "../components/Notification";
import axios from "axios";

export default function NewsletterForm() {

  const [formResponse, setFormResponse] = useState({})
  const [credentials, setCredentials] = useState({
    email: ""
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
      .post(`${window.location.origin}/api/newsletter`, credentials, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        setFormResponse({classname: "success", message: "Success story"})
        setCredentials({
          ...credentials,
          email: ""
        })
      })
      .catch((error) => {
        setFormResponse({classname: "danger", message: error.response.data.message ?? error.response.data.detail})
      })
  }

  return (
    <>
      {Object.keys(formResponse).length > 0 && (
        <Notification {...formResponse} />
      )}

      <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
        <div className={"form-field-inline"}>
          <div className={"form-field"}>
            <input 
              type={"email"} 
              value={credentials.email} 
              maxLength={255}
              placeholder={"Your email ..."} 
              onChange={(e) => handleChange(e, "email")}
              required
            />
          </div>
          <button className={"btn btn-secondary"} type={"submit"}>Register</button>
        </div>
      </form>
    </>
  )
}
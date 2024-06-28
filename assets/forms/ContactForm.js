import axios from "axios";
import React, { useState } from "react";
import Notification from "../components/Notification";

export default function ContactForm() {

  const [formResponse, setFormResponse] = useState({})
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    message: ""
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
      .post(`${window.location.origin}/api/contact`, credentials, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      .then((response) => {
        setFormResponse({classname: "success", message: "Success story"})
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
              type={"text"} 
              placeholder={"Name"}
              value={credentials.name}
              onChange={(e) => handleChange(e, "name")} 
              required
            />
          </div>
          <div className={"form-field"}>
            <input 
              type={"email"} 
              placeholder={"Email"}
              value={credentials.email}
              onChange={(e) => handleChange(e, "email")} 
              required
            />
          </div>
        </div>
        
        <div className={"form-field"}>
          <textarea 
            placeholder={"Message"}
            value={credentials.message}
            onChange={(e) => handleChange(e, "message")}
            required
          ></textarea>
        </div>
        
        <div className={"form-actions"}>
          <button className={"btn btn-white btn-xl btn-bold"} type={"submit"}>Send</button>
        </div>
      </form>
    </>
  )
}
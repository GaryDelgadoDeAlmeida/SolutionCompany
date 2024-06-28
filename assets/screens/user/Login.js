import React from "react";
import Header from "../../components/Header";
import LoginForm from "../../forms/LoginForm";

export default function Login() {

  return (
    <Header>
      <section className={"page-section"}>
        <div className={"page-wrapper"}>
            <div className={"card"}>
                <div className={"-header"}>
                    <h1>Hello world</h1>
                </div>
                <div className={"-content"}>
                    <LoginForm />
                </div>
            </div>
        </div>
      </section>
    </Header>
  )
}
import React from "react";
import Header from "../../components/Header";
import Services from "./parts/Services";
import Teams from "./parts/Teams";
import Newsletter from "./parts/Newsletter";
import Prices from "./parts/Prices";
import Portfolios from "./parts/Portfolios";
import Contact from "./parts/Contact";
import Map from "./parts/Map";
import About from "./parts/About";

export default function Home() {

  return (
    <Header>
        <section className={"page-hero"}>
            <div className={"hero-background"}>
                <img src={`${window.location.origin}/content/img/background-hero.jpeg`} alt={""} />
                <div className={"hero-superposition"}></div>
            </div>
            <div className={"hero-wrapper"}>
                <div className={"txt-center"}>
                    <h1 className={"-hero-title"}>Solution Company</h1>
                    <p className={"-hero-description"}>We design & we code websites</p>
                    <a className={"btn btn-secondary btn-hero d-block m-auto align-center"} href={"/#portfolios"}>Our work</a>
                </div>
            </div>
        </section>

        <Services />
        <About />
        <Teams />
        <Newsletter />
        <Prices />
        <Portfolios />
        <Contact />
        <Map />
    </Header>
  )
}
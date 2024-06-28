import React from "react";

export default function About() {

  return (
    <>
        <section className={"page-section page-about"} id={"about-us"}>
            <div className={"page-background"}>
                <img src={`${window.location.origin}/content/img/background-about.webp`} alt={""} />
                <div className={"page-superposition"}></div>
            </div>
            <div className={"page-wrapper"}>
                <h2 className={"-title"}>We provide <span className={"c-secondary"}>solutions</span></h2>
                <p className={"-subtitle"}><span className={"bg-white c-black p-5"}>Creative</span> Designers & <span className={"bg-white c-black p-5"}>Talented</span> Developers</p>
                <p className={"-description"}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum</p>
            </div>
        </section>

        <section className={"page-section page-about"}>
            <div className={"page-wrapper c-black"}>
                <div className={"-about-skills"}>
                    <div className={"-item"}>
                        <h2 className={"-title c-secondary"}>About solution</h2>
                        <p className={"-subtitle fs-16"}>Smart, Light and Adaptive</p>
                        <div className={"-description"}>
                            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum</p>
                            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum</p>
                        </div>
                    </div>
                    <div className={"-item"}>
                        <div className={"-progress-bar"}>
                            <label>Web Design</label>
                            <progress value={100} max={100}>100%</progress>
                        </div>
                        <div className={"-progress-bar"}>
                            <label>Multimedia</label>
                            <progress value={80} max={100}>80%</progress>
                        </div>
                        <div className={"-progress-bar"}>
                            <label>Search Engine Marketing</label>
                            <progress value={90} max={100}>90%</progress>
                        </div>
                        <div className={"-progress-bar"}>
                            <label>Custom Branding</label>
                            <progress value={70} max={100}>70%</progress>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
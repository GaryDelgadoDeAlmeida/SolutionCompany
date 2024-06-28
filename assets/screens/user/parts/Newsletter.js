import React from "react";
import NewsletterForm from "../../../forms/NewsletterForm";

export default function Newsletter() {

  return (
    <div className={"page-section"} id={"newsletters"}>
      <div className={"page-background"}>
        <img src={`${window.location.origin}/content/img/background-newsletter.jpg`} alt={""} />
        <div className={"page-superposition"}></div>
      </div>
      <div className={"page-wrapper c-white"}>
        <div className={"newsletter-section"}>
            <h2 className={"page-title"}>Get our newsletter!</h2>
            <p className={"-description"}>Lorem ipsum dolor sit amet. Et laborum natus est dolor laboriosam ut iste nemo. Qui aliquam ullam vel sequi saepe sit velit dolore qui molestiae exercitationem eum soluta explicabo.</p>
            <div className={"newsletter-form-section"}>
                <NewsletterForm />
            </div>
        </div>
      </div>
    </div>
  )
}
import React from "react";
import ContactForm from "../../../forms/ContactForm";

export default function Contact() {

  return (
    <section className={"page-section"} id={"contact-us"}>
        <div className={"page-background"}>
            <img src={`${window.location.origin}/content/img/background-contact-us.jpg`} alt={""} />
            <div className={"page-superposition"}></div>
        </div>
        <div className={"page-wrapper"}>
            <div className={"contact-zone"}>
                <div className={"-item"}>
                    <div className={"-contact-subcol"}>
                        <div className={"-item"}>
                            <h3 className={"-title"}>Solution Co.</h3>
                            <p>Lorem ipsum dolor sit amet. Sed iste galisum aut harum suscipit aut animi itaque non possimus dolorum? Et dolorem libero ut similique magnam rem provident neque.</p>
                            <div className={"-socials-links"}>
                                <a className={"-socials-link"} href={"#"} target={"_blank"}>
                                    <img src={`${window.location.origin}/content/svg/facebook-green.svg`} alt={"facebook"} />
                                </a>
                                <a className={"-socials-link"} href={"#"} target={"_blank"}>
                                    <img src={`${window.location.origin}/content/svg/twitter-green.svg`} alt={"twitter"} />
                                </a>
                                <a className={"-socials-link"} href={"#"} target={"_blank"}>
                                    <img src={`${window.location.origin}/content/svg/instagram-green.svg`} alt={"instagram"} />
                                </a>
                            </div>
                        </div>
                        <div className={"-item"}>
                            <h3 className={"-title"}>Visit Office</h3>
                            <div className={"-coordinates"}>
                                <div className={"-coordinate"}>
                                    <img src={`${window.location.origin}/content/svg/location-green.svg`} alt={"location"} />
                                    <span>10 Walking Street, France</span>
                                </div>
                                <div className={"-coordinate"}>
                                    <img src={`${window.location.origin}/content/svg/phone-green.svg`} alt={"phone"} />
                                    <span>+33 1 00 00 00 00</span>
                                </div>
                                <div className={"-coordinate"}>
                                    <img src={`${window.location.origin}/content/svg/mail-green.svg`} alt={"email"} />
                                    <span>emailtodefine@company.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"-item"}>
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>
  )
}
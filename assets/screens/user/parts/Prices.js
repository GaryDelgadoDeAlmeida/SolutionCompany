import React from "react";
import { Link } from "react-router-dom";

export default function Prices() {

  return (
    <section className={"page-section"} id={"pricing"}>
      <div className={"page-wrapper"}>
        <h2 className={"page-title"}>Our pricing</h2>

        <div className={"prices"}>
            <div className={"-item"}>
                <div className={"price-card"}>
                    <div className={"-header"}>
                        <label className={"-title"}>Basic</label>
                    </div>
                    <div className={"-content"}>
                        <ul>
                            <li>$20 per month</li>
                            <li>100GB storage</li>
                            <li>1000GB transfer</li>
                            <li>10 Bootstrap themes</li>
                            <li>24h support</li>
                        </ul>
                    </div>
                    <div className={"-footer"}>
                        <Link className={"btn btn-secondary btn-xl px-10-only btn-bold"} to={"/submit-offer"}>Sign in</Link>
                    </div>
                </div>
            </div>
            <div className={"-item"}>
                <div className={"price-card"}>
                    <div className={"-header"}>
                        <label className={"-title"}>Standard</label>
                    </div>
                    <div className={"-content"}>
                        <ul>
                            <li>$20 per month</li>
                            <li>100GB storage</li>
                            <li>1000GB transfer</li>
                            <li>10 Bootstrap themes</li>
                            <li>24h support</li>
                        </ul>
                    </div>
                    <div className={"-footer"}>
                        <Link className={"btn btn-secondary btn-xl px-10-only btn-bold"} to={"/submit-offer"}>Sign in</Link>
                    </div>
                </div>
            </div>
            <div className={"-item"}>
                <div className={"price-card"}>
                    <div className={"-header"}>
                        <label className={"-title"}>Professional</label>
                    </div>
                    <div className={"-content"}>
                        <ul>
                            <li>$20 per month</li>
                            <li>100GB storage</li>
                            <li>1000GB transfer</li>
                            <li>10 Bootstrap themes</li>
                            <li>24h support</li>
                        </ul>
                    </div>
                    <div className={"-footer"}>
                        <Link className={"btn btn-secondary btn-xl px-10-only btn-bold"} to={"/submit-offer"}>Sign in</Link>
                    </div>
                </div>
            </div>
            <div className={"-item"}>
                <div className={"price-card"}>
                    <div className={"-header"}>
                        <label className={"-title"}>Advanced</label>
                    </div>
                    <div className={"-content"}>
                        <ul>
                            <li>$20 per month</li>
                            <li>100GB storage</li>
                            <li>1000GB transfer</li>
                            <li>10 Bootstrap themes</li>
                            <li>24h support</li>
                        </ul>
                    </div>
                    <div className={"-footer"}>
                        <Link className={"btn btn-secondary btn-xl px-10-only btn-bold"} to={"/submit-offer"}>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
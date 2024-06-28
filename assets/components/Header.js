import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {

    let storageUser = localStorage.getItem("user") ?? ""
    const [logged, setLogged] = useState(storageUser.length > 0 ? true : false)

    useEffect(() => {
        updateLoggedStatus()
    }, [storageUser])

    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.setItem("user", "")
        setLogged(false)
    }

    const updateLoggedStatus = () => {
        setLogged(storageUser.length > 0 ? true : false)
    }
  
    return (
        <div className={"page"}>
            <div className={"page-header"}>
                <div className={"header-desktop"}>
                    <div className={"-left"}>
                        <a href="/">
                        <img className={"logo"} src={`${window.location.origin}/content/img/logo.jpg`} alt={"Logo"} />
                        </a>
                    </div>
                    <div className={"-right"}>
                        <nav className={"menu"}>
                            <li><a href={"/"}>Home</a></li>
                            <li><a href={"/#services"}>Service</a></li>
                            <li><a href={"/#about-us"}>About</a></li>
                            <li><a href={"/#teams"}>Team</a></li>
                            <li><a href={"/#pricing"}>Pricing</a></li>
                            <li><a href={"/#portfolios"}>Portfolio</a></li>
                            <li><a href={"/#contact-us"}>Contact</a></li>
                            {logged ? (
                                <li className={"-item"}><Link to={"#logout"} onClick={(e) => handleLogout(e)}>Logout</Link></li>
                            ) : (
                                <li className={"-item"}><Link to={"/login"}>Login</Link></li>
                            )}
                        </nav>
                    </div>
                </div>

                <div className={"header-mobile"}>
                    <input id={"menubars"} type={"checkbox"} hidden />
                    <label className={"labelBars"} htmlFor={"menubars"}>
                        <img src={`${window.location.origin}/content/svg/bars.svg`} alt={""} />
                    </label>
                    
                    <div className={"mobile-menu"}>
                        <div className={"mobile-menu-widget"}>
                            <label className={"labelBars"} htmlFor={"menubars"}>
                                <img src={`${window.location.origin}/content/svg/bars.svg`} alt={""} />
                            </label>

                            <nav className={"menu"}>
                                <li className={"-item"}><a href={"/"}>Home</a></li>
                                <li className={"-item"}><a href={"/#services"}>Service</a></li>
                                <li className={"-item"}><a href={"/#about-us"}>About</a></li>
                                <li className={"-item"}><a href={"/#teams"}>Team</a></li>
                                <li className={"-item"}><a href={"/#pricing"}>Pricing</a></li>
                                <li className={"-item"}><a href={"/#portfolios"}>Portfolio</a></li>
                                <li className={"-item"}><a href={"/#contact-us"}>Contact</a></li>
                                {logged ? (
                                    <li className={"-item"}><Link to={"#logout"} onClick={(e) => handleLogout(e)}>Logout</Link></li>
                                ) : (
                                    <li className={"-item"}><Link to={"/login"}>Login</Link></li>
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={"page-content"}>{props.children}</div>
            
            <div className={"page-footer"}>
                <div className={"footer-wrapper"}>
                    <div className={"footer-copyright"}>
                        <p>Copyright &copy; {(new Date()).getFullYear()} Solution Company</p>
                        <p>Realised by <a className={"c-secondary"} href={"https://garry-almeida.com/"} target={"_blank"}>Garry ALMEIDA</a></p>
                    </div>
                    <div className={"footer-social-links"}>
                        <a className={"-social-link"} href={"#"} target={"_blank"}>
                            <img src={`${window.location.origin}/content/svg/facebook.svg`} alt={"facebook"} />
                        </a>
                        <a className={"-social-link"} href={"#"} target={"_blank"}>
                            <img src={`${window.location.origin}/content/svg/twitter.svg`} alt={"twitter"} />
                        </a>
                        <a className={"-social-link"} href={"#"} target={"_blank"}>
                            <img src={`${window.location.origin}/content/svg/instagram.svg`} alt={"instagram"} />
                        </a>
                        <a className={"-social-link"} href={"#"} target={"_blank"}>
                            <img src={`${window.location.origin}/content/svg/linkedin.svg`} alt={"linkedin"} />
                        </a>
                        <a className={"-social-link"} href={"#"} target={"_blank"}>
                            <img src={`${window.location.origin}/content/svg/github.svg`} alt={"github"} />
                        </a>
                        <a className={"-social-link"} href={"#"} target={"_blank"}>
                            <img src={`${window.location.origin}/content/svg/pinterest.svg`} alt={"pinterest"} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
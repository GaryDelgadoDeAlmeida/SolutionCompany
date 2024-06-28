import React from "react";
import { Link } from "react-router-dom";

export default function HeaderAdmin(props) {

    const handleLogout = (e) => {
        e.preventDefault()
    }

    return (
        <div className={"page-admin"}>
            <div className={"page-header"}>
                <div className={"-desktop"}>
                    <nav className={"-menu-list"}>
                        <li className={"-item"}><Link to={"/admin"}>Home</Link></li>
                        <li className={"-item"}><Link to={"/admin/profile"}>Profile</Link></li>
                        <li className={"-item"}><Link to={"/admin/services"}>Services</Link></li>
                        <li className={"-item"}><Link to={"/admin/portfolios"}>Portfolios</Link></li>
                        <li className={"-item"}><Link to={"/admin/teams"}>Teams</Link></li>
                        <li className={"-item"}><Link to={"/admin/newsletters"}>Newsletters</Link></li>
                        <li className={"-item"}><Link to={"/admin/inboxs"}>Inboxs</Link></li>
                        <li className={"-item"}><button type={"button"} onClick={(e) => handleLogout(e)}>Logout</button></li>
                    </nav>
                </div>
            </div>
            <div className={"page-content"}>
                <div className={"page-mobile-header"}>
                    <input id={"showMobileMenu"} type={"checkbox"} hidden />
                    <label htmlFor={"showMobileMenu"}>
                        <img src={`${window.location.origin}/content/svg/bars/svg`} alt={""} />
                    </label>
                    <nav className={"-mobile"}>
                        <li className={"-item"}><Link to={"/admin"}>Home</Link></li>
                        <li className={"-item"}><Link to={"/admin/profile"}>Profile</Link></li>
                        <li className={"-item"}><Link to={"/admin/services"}>Services</Link></li>
                        <li className={"-item"}><Link to={"/admin/portfolios"}>Portfolios</Link></li>
                        <li className={"-item"}><Link to={"/admin/teams"}>Teams</Link></li>
                        <li className={"-item"}><Link to={"/admin/newsletters"}>Newsletters</Link></li>
                        <li className={"-item"}><Link to={"/admin/inboxs"}>Inboxs</Link></li>
                        <li className={"-item"}><button type={"button"} onClick={(e) => handleLogout(e)}>Logout</button></li>
                    </nav>
                </div>
                <div className={"page-wrapper"}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
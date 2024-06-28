import React, { useEffect, useState } from "react";
import PrivateRessource from "../../../hooks/PrivateRessource";
import { Link } from "react-router-dom";

export default function Portfolios() {

  const [filter, setFilter] = useState("")
  const { loading, items, load, error } = PrivateRessource(`${window.location.origin}/api/portfolios?filter=${filter}`, false)

  useEffect(() => {
    load()
  }, [filter])

  const handleFilter = (e, filterName) => {
    e.preventDefault()

    setFilter(filterName)
  }

  return (
    <div className={"page-section"} id={"portfolios"}>
      <div className={"page-wrapper"}>
        <h2 className={"page-title"}>Recent Projects</h2>
        
        <div className={"portfolios"}>
          <div className={"portfolios-filter"}>
            <button type={"button"} className={"-filter"} onClick={(e) => handleFilter(e, "")}>All</button>
            <button type={"button"} className={"-filter"} onClick={(e) => handleFilter(e, "graphic")}>Graphic</button>
            <button type={"button"} className={"-filter"} onClick={(e) => handleFilter(e, "website")}>Website</button>
            <button type={"button"} className={"-filter"} onClick={(e) => handleFilter(e, "wallpaper")}>Wallpaper</button>
            <button type={"button"} className={"-filter"} onClick={(e) => handleFilter(e, "photoshop")}>Photoshop</button>
          </div>
          <div className={"portfolios-content"}>
            <Link className={"portfolio-card"} to={"/portfolio/1"}>
              <div className={"-header"}>
                <img src={`${window.location.origin}/content/img/portfolios/1.jpg`} alt={""} />
              </div>
              <div className={"-content"}>
                <label className={"-title"}>Portfolio 1</label>
              </div>
            </Link>
            <Link className={"portfolio-card"} to={"/portfolio/1"}>
              <div className={"-header"}>
                <img src={`${window.location.origin}/content/img/portfolios/1.jpg`} alt={""} />
              </div>
              <div className={"-content"}>
                <label className={"-title"}>Portfolio 1</label>
              </div>
            </Link>
            <Link className={"portfolio-card"} to={"/portfolio/1"}>
              <div className={"-header"}>
                <img src={`${window.location.origin}/content/img/portfolios/1.jpg`} alt={""} />
              </div>
              <div className={"-content"}>
                <label className={"-title"}>Portfolio 1</label>
              </div>
            </Link>
            <Link className={"portfolio-card"} to={"/portfolio/1"}>
              <div className={"-header"}>
                <img src={`${window.location.origin}/content/img/portfolios/1.jpg`} alt={""} />
              </div>
              <div className={"-content"}>
                <label className={"-title"}>Portfolio 1</label>
              </div>
            </Link>
            <Link className={"portfolio-card"} to={"/portfolio/1"}>
              <div className={"-header"}>
                <img src={`${window.location.origin}/content/img/portfolios/1.jpg`} alt={""} />
              </div>
              <div className={"-content"}>
                <label className={"-title"}>Portfolio 1</label>
              </div>
            </Link>
            <Link className={"portfolio-card"} to={"/portfolio/1"}>
              <div className={"-header"}>
                <img src={`${window.location.origin}/content/img/portfolios/1.jpg`} alt={""} />
              </div>
              <div className={"-content"}>
                <label className={"-title"}>Portfolio 1</label>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
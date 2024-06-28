import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import Pagination from "../../components/Pagination";
import PrivateRessource from "../../hooks/PrivateRessource";

export default function Teams() {

  const [offset, setOffset] = useState(1)
  const { loading, items, load, error } = PrivateRessource(`${window.location.origin}/api/teams?offset=${offset}`)

  useEffect(() => {
    load()
  }, [offset])

  return (
    <HeaderAdmin>
      <h1>Teams</h1>
    </HeaderAdmin>
  )
}
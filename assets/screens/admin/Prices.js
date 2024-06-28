import React, { useEffect } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import PrivateRessource from "../../hooks/PrivateRessource";

export default function Prices() {

  const { loading, items, load, error } = PrivateRessource(`${window.location.origin}/api/prices`)
  useEffect(() => {
    load()
  }, [])

  return (
    <HeaderAdmin>
      <h1>Prices</h1>
    </HeaderAdmin>
  )
}
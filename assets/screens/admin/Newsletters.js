import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import PrivateRessource from "../../hooks/PrivateRessource";

export default function Newsletters() {

  const [offset, setOffset] = useState(1)
  const { loading, items, load, error } = PrivateRessource(`${window.location.origin}/api/backoffice/newsletters?offset=${offset}`)

  useEffect(() => {
    load()
  }, [offset])

  return (
    <HeaderAdmin>
      <h1>Newsletter</h1>
    </HeaderAdmin>
  )
}
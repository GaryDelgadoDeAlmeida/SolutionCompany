import React, { useEffect, useState } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import Pagination from "../../components/Pagination";
import PrivateRessource from "../../hooks/PrivateRessource";

export default function Inboxs() {

  const [offset, setOffset] = useState(1)
  const { loading, items, load, error } = PrivateRessource(`${window.location.origin}/api/backoffice/inboxs?offset=${offset}`)

  useEffect(() => {
    load()
  }, [offset])

  return (
    <HeaderAdmin>
      <h1>Inboxs</h1>
    </HeaderAdmin>
  )
}
import React, { useEffect } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import PrivateRessource from "../../hooks/PrivateRessource";

export default function Profile() {

  const { loading, items, load, error } = PrivateRessource(`${window.location.origin}/api/backoffice/profile`)

  useEffect(() => {
    load()
  }, [])

  return (
    <HeaderAdmin>
      <h1>Profile</h1>
    </HeaderAdmin>
  )
}
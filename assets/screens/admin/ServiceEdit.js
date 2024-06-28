import React, { useEffect } from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import PrivateRessource from "../../hooks/PrivateRessource";
import { Navigate, useParams } from "react-router-dom";

export default function Service() {

  const { serviceID } = useParams()
  if(isNaN(serviceID)) {
    return <Navigate to={"/admin/services"} />
  }

  const { loading, items, load, error } = PrivateRessource(`${window.location.origin}/api/backoffice/service/${serviceID}`)
  useEffect(() => {
    load()
  }, [])

  return (
    <HeaderAdmin>
      <h1>Service</h1>
    </HeaderAdmin>
  )
}
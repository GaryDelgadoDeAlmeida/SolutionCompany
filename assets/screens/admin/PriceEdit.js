import React from "react";
import { Navigate, useParams } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";

export default function PriceEdit() {

  const { priceID } = useParams()
  if(isNaN(priceID)) {
    return <Navigate to={"/admin/prices"} />
  }

  return (
    <HeaderAdmin>
      <h1>Price edit</h1>
    </HeaderAdmin>
  )
}
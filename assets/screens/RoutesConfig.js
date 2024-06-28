import React from "react";
import { Route, Routes } from "react-router-dom";

// User
import Home from "./user/Home";
import NotFound from "./NotFound";

// Admin
import AdminHome from "./admin/Home";
import AdminProfile from "./admin/Profile";
import AdminServices from "./admin/Services";
import AdmonTeams from "./admin/Teams";
import AdminPortfolios from "./admin/Portfolios";
import AdminPrices from "./admin/Prices";
import AdminNewsletters from "./admin/Newsletters";
import AdminInboxs from "./admin/Inboxs";
import Login from "./user/Login";

export default function RoutesConfig() {

  return (
    <Routes>
      {/* User */}
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />

      {/* Admin */}
      <Route path={"/admin"} element={<AdminHome />} />
      <Route path={"/admin/profile"} element={<AdminProfile />} />
      <Route path={"/admin/services"} element={<AdminServices />} />
      <Route path={"/admin/teams"} element={<AdmonTeams />} />
      <Route path={"/admin/portfolios"} element={<AdminPortfolios />} />
      <Route path={"/admin/prices"} element={<AdminPrices />} />
      <Route path={"/admin/newsletters"} element={<AdminNewsletters />} />
      <Route path={"/admin/inboxs"} element={<AdminInboxs />} />

      {/* Common */}
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  )
}
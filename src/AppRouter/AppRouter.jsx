import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={HomePage}/>
          <Route path="/category" element={ Category }>
          
          </Route>
          <Route path="/notifications" element={Notifications}/>
          <Route path="/profile" element={Profile}/>
          <Route path="/add-product" element={PostAnAd}/>
        </Route>
      </Routes>
    </div>
  );
}

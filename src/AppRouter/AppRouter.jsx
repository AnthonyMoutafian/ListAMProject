import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* main page */}
        {/* NAVIGATION START */}

        <Route index element={HomePage} />

        <Route path="/category" element={Category}>
          <Route path=":categoryTypeID/:categoryTypeSort" element={Category} />
        </Route>

        <Route path="/notifications" element={Notifications} />

        <Route path="/profile" element={Profile}>
          <Route path="ads" element={Ads} />
          <Route path="favorite-ads" element={FavoriteAds} />
          <Route path="purchases" element={Purchases} />
          <Route path="sales" element={Sales} />
          <Route path="messages" element={Messages} />
          <Route path="wallet" element={Wallet} />
          <Route path="settings" element={Settings} />
        </Route>

        <Route path="/add-product" element={PostAnAd}>
          <Route path=":chooseTypeID" element={PostAnAd} />
          <Route path=":chooseTypeID/:addTypeID" element={PostAnAd} />
        </Route>

        {/* NAVIGATION END */}

        {/* HEADER START */}

        <Route path="/story" element={Story}>
          <Route path=":storyID" element={Story} />
        </Route>

        <Route path="/businesses" element={BusinessesPage}>
          <Route path=":businessesUserID" element={BusinessesPage} />
        </Route>

        <Route path="/delivery" element={DeliveryPage}>
          <Route path=":categoryID" element={DeliveryPage} />
        </Route>

        {/* HEADER END */}
        {/* main page */}

        {/* product page */}
        <Route path="/item" element={ProductPage}>
          <Route path=":itemID" element={ProductPage} />
        </Route>
        {/* product page */}
      </Route>
    </Routes>
  );
}

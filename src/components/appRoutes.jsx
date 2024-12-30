import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Users,
  Ads,
  Posts,
  Chat,
  RegularUser,
  Shop,
  Profile,
  NotFound,
} from "../pagesPath";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/users" element={<Users />}>
        <Route path="regular-user" element={<RegularUser />} />
        <Route path="shop" element={<Shop />} />
      </Route>

      <Route path="/ads" element={<Ads />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

import * as React from "react";
import { Route, Routes } from "react-router-dom";

import * as Home from "./pages/home";
import * as Users from "./pages/users";
import * as User from "./pages/user";
import "the-new-css-reset/css/reset.css";

//------------------------------------------------------------------------------
// props
//------------------------------------------------------------------------------

type Props = unknown;

//------------------------------------------------------------------------------
// component
//------------------------------------------------------------------------------

export const App = () => (
  <Routes>
    <Route element={<Home.Component />} path="/" />
    <Route element={<Users.Component />} path="/users" />
    <Route element={<User.Component />} path="/user" />
  </Routes>
);

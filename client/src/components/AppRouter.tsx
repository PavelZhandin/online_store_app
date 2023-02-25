import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "..";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Routes>
      {user?.isAuth &&
        authRoutes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={React.createElement(component)}
          />
        ))}
      {publicRoutes.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          element={React.createElement(component)}
        />
      ))}
      <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;

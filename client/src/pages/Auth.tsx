import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <form className="flex flex-col gap-4">
        <h2 className="font-bold">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required={true} />
        </div>
        <div className="flex items-center gap-2">
          {isLogin ? (
            <Label htmlFor="remember">
              Нет аккаунта?{" "}
              <NavLink
                className="font-bold text-orange-400"
                to={REGISTRATION_ROUTE}
              >
                Зарегистрируйся!
              </NavLink>
            </Label>
          ) : (
            <Label htmlFor="remember">
              Есть аккаунт?{" "}
              <NavLink className="font-bold text-orange-400" to={LOGIN_ROUTE}>
                Войдите!
              </NavLink>
            </Label>
          )}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Auth;

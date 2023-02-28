import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/userApi";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const click = async () => {
    try {
      let data;

      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user?.setUser(user);
      user?.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <form onSubmit={() => {}} className="flex flex-col gap-4">
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
        <Button type="button" onClick={click}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Auth;

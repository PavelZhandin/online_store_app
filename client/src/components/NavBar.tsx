import { Navbar } from "flowbite-react";
import { Button } from "flowbite-react/lib/esm/components";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "..";
import { SHOP_ROUTE } from "../utils/consts";

const NavBar = () => {
  const { user } = useContext(Context);
  return (
    <div>
      <Navbar fluid={true} rounded={true} className="">
        <Navbar.Brand href={SHOP_ROUTE}>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CupiDevice
          </span>
        </Navbar.Brand>

        <Navbar.Toggle className="flex order-3" />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
        {!user.isAuth ? (
          <div className="flex md:order-2">
            <Button>Админ панель</Button>
            <Button className="ml-4">Войти</Button>
          </div>
        ) : (
          <Button>Авторизация</Button>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;

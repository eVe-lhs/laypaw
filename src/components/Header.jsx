import React, { useState } from "react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeItem, setActiveItem] = useState("home");
  return (
    <Menu className="menu" inverted stackable>
      <Menu.Item>
        <img src="https://react.semantic-ui.com/logo.png" />
      </Menu.Item>
      <Menu.Item
        as={Link}
        to="/"
        name="home"
        active={activeItem === "home"}
        onClick={() => setActiveItem("home")}
      />

      <Menu.Item
        as={Link}
        to="/friends"
        name="friends"
        active={activeItem === "friends"}
        onClick={() => setActiveItem("friends")}
      />
      <Menu.Item
        as={Link}
        to="/profile/1"
        name="profile"
        active={activeItem === "profile"}
        onClick={() => setActiveItem("profile")}
      />
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item name="logout" />
      </Menu.Menu>
    </Menu>
  );
};

export default Header;

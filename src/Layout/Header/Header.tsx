import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navItems = [
    { path: "/posts", name: "Posts" },
    { path: "/comments", name: "Comments" },
    { path: "/albums", name: "Albums" },
    { path: "/photos", name: "Photos" },
    { path: "/todos", name: "Todos" },
    { path: "/users", name: "Users" },
    { path: "/wishlist", name: "Wishlist" },
  ];

  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-center gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-semibold"
                : "text-white hover:text-yellow-300"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default React.memo(Header);

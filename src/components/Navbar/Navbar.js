import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [categories, setCategories] = useState([]);

  const getData = () => {
    Promise.all([
      fetch('/api/menu').then((res) => res.json()),
      fetch('/api/sections').then((res) => res.json()),
    ]).then(([refData, catData]) => {
      setCategories(
        catData.filter(({ _id }) =>
          refData?.options?.some(({ _ref }) => _ref === _id)
        )
      );
    });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredItems = (categories) => {
    return categories.map((category) => (
      <li key={category._id}>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to={category._id}
        >
          <img
            src={`/images/${category.carouselImage?.asset?._ref}`}
            height="120px"
            alt={category.name.en}
          />
          <h4>{category.name.en}</h4>
        </NavLink>
      </li>
    ));
  };

  return (
    <>
      <nav className="menu">
        <li>
          <NavLink to="/category" end>
            <h4>BK Menu</h4>
          </NavLink>
        </li>
        {filteredItems(categories)}
      </nav>
      <Outlet context={categories} />
    </>
  );
}

export default Navbar;

import React, { useState } from 'react';
import './App.css';
import Items from './components/Items';
import Users from './containers/Users';
import Categories from './containers/Categories';
import Reviews from './containers/Reviews';

function App() {
  const [openPage, setOpenPage] = useState('items');

  const NavItem = ({ label, pageName }) => (
    <div className="navitem">
      <button
        className={`navlink ${pageName === openPage && 'navlink-active'}`}
        onClick={() => setOpenPage(pageName)}>
        {label}
      </button>
    </div>
  )

  return (
    <div className="app">
      <div className="container">
        <div className="navigation">
          <NavItem label={'Items'} pageName={'items'} />
          <NavItem label={'Users'} pageName={'users'} />
          <NavItem label={'Categories'} pageName={'categories'} />
          <NavItem label={'Reviews'} pageName={'reviews'} />
        </div>
        <div className="content">
          {openPage === 'items' && <Items />}
          {openPage === 'users' && <Users />}
          {openPage === 'categories' && <Categories />}
          {openPage === 'reviews' && <Reviews />}
        </div>
      </div>
    </div>
  );
}

export default App;

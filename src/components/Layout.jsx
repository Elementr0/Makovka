import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="container header-container">
          <div className="logo">Маковка</div>
          <button className="mobile-menu-toggle" aria-label="Меню">
            <i className="fas fa-bars"></i>
          </button>
          <nav className="nav">
            <NavLink to="/" end>Главная</NavLink>
            <NavLink to="/about">О нас</NavLink>
            <NavLink to="/products">Продукция</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
          </nav>
        </div>
      </header>

      {/* Сюда будут подставляться страницы, каждая со своим тегом <main> */}
      <Outlet />

      <footer className="footer">
        <p>© 2025 Булочная «Маковка». Свежая выпечка с любовью.</p>
        <div className="socials">
          
          <a href="#"><i className="fab fa-vk"></i></a>
          <a href="#"><i className="fab fa-telegram"></i></a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
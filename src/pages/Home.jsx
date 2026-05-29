import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      
      <section 
        className="mainIMG" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/main.jpg')` }}
      >
        <div className="container">
          <h1>Добро пожаловать в «Маковку»</h1>
          <p>Свежая выпечка, натуральные ингредиенты, уютная атмосфера</p>
          <Link to="/products" className="btn btn-prod">
            Смотреть продукцию →
          </Link>
        </div>
      </section>

      <section className="advantages">
        <div className="container">
          <div className="advantages-grid">
            <div className="advantage-card">
              <i className="fas fa-bread-slice"></i>
              <h3>Только свежая выпечка</h3>
              <p>Каждое утро мы печём хлеб и круассаны к вашему завтраку.</p>
            </div>
            <div className="advantage-card">
              <i className="fas fa-seedling"></i>
              <h3>Натуральные ингредиенты</h3>
              <p>Мука от местных производителей, никаких усилителей вкуса.</p>
            </div>
            <div className="advantage-card">
              <i className="fas fa-truck"></i>
              <h3>Доставка по городу</h3>
              <p>Привезём ваши любимые пирожные прямо к двери.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
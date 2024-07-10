import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
import { useAuth } from '../components/AuthContext';

const products = [
  {
    id: 1,
    name: 'JPhone 13 High Quality Value Buy Best Cam...',
    price: '$999.00',
    image: './iphone13.png',
    rating: 50,
    description: 'Experience the latest technology with the JPhone 13. Best in class camera and performance.'
  },
  {
    id: 2,
    name: 'WH-1000XM4 Wireless Headphones High Qu...',
    price: '$59.00',
    image: './headphone.png',
    rating: 120,
    discount: 50,
    description: 'Immerse yourself in high-quality sound with the WH-1000XM4. Perfect for music lovers.'
  },
  {
    id: 3,
    name: 'S21 Ultra ',
    price: '$1,199.00',
    image: './s21.png',
    rating: 100,
    description: 'The S21 Ultra offers unparalleled performance and features for the modern user.'
  },
  {
    id: 4,
    name: 'Mini Polaroid Camera for Girls with Flash Li...',
    price: '$79.00',
    image: './poloroid.png',
    rating: 70,
    description: 'Capture moments instantly with the Mini Polaroid Camera. Fun and easy to use.'
  },
  {
    id: 5,
    name: 'AG OLED65CXPUA 4K Smart OLED TV New...',
    price: '$2,799.00',
    image: './oledtv.png',
    rating: 20,
    description: 'Experience stunning visuals with the AG OLED65CXPUA 4K Smart OLED TV.'
  }
];

const Home = () => {
  const navigate = useNavigate();
  const { user, login, loginAsAdmin } = useAuth();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <main className={`home-content`}>
      <header className="header">
      <div className="header-content">
  <h1>Your One-Stop Electronic Market</h1>
  <p>Welcome to Minishop, your ultimate destination for the latest and greatest in electronics. Discover unbeatable deals and exclusive offers every day!</p>
  <p>
    ✔️ Wide range of products from top brands<br />
    ✔️ Exclusive discounts and deals<br />
    ✔️ Fast and reliable shipping<br />
    ✔️ 24/7 customer support
  </p>
  <button className="shop-now" onClick={() => navigate('/shop')}>Shop Now</button>
</div>

        <div className="header-image">
          <img src="./banner.png" alt="Electronics" />
        </div>
      </header>
     
      <section className="benefits">
        <div className="benefit">
          <img src="./customer-service-earphone-svgrepo-com.svg" alt="Responsive" />
          <h3>Responsive</h3>
          <p>Customer service available 24/7</p>
        </div>
        <div className="benefit">
          <img src="./secure-svgrepo-com.svg" alt="Secure" />
          <h3>Secure</h3>
          <p>Certified marketplace since 2017</p>
        </div>
        <div className="benefit">
          <img src="./shipping-svgrepo-com.svg" alt="Shipping" />
          <h3>Shipping</h3>
          <p>Free, fast, and reliable worldwide</p>
        </div>
        <div className="benefit">
          <img src="./return-box-cycle-svgrepo-com.svg" alt="Transparent" />
          <h3>Transparent</h3>
          <p>Hassle-free return policy</p>
        </div>
      </section>
      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <p className="product-rating">Rating: {product.rating}</p>
              <p className="product-description">{product.description}</p>
            </div>
          ))}
        </div>
      </section>

     
     
    </main>
  );
};

export default Home;

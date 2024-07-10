import React, { useState, useEffect } from 'react';
import '../css/ViewProducts.css';

function ViewProducts() {
    const [showForm, setShowForm] = useState(false);
    const [formMode, setFormMode] = useState('add'); // 'add' or 'update'
    const [currentProduct, setCurrentProduct] = useState(null);
    const [image, setImage] = useState(null);

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
      
      const handleUpdateProductClick = (product) => {
        setCurrentProduct(product);
        setFormMode('update');
        setShowForm(true);
    };
    const handleCloseForm = () => {
        setShowForm(false);
        setCurrentProduct(null);
    };

  
    return (
        <div className="admin-page">
            <div className="header-all">
                <h1>All Products</h1>
            </div>
            <section className="featured-products">
                <div className="products-list">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            {product.image && (
              <img src={product.image} alt={product.name} className="product-image" />
            )}
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-price">${product.price}</p>
                            <p className="product-rating">Rating: {product.rating}</p>
                            <p className="product-description">{product.description}</p>
                            <div className="product-button">
                            <button className="update-product-btn" onClick={() => handleUpdateProductClick(product)}>Edit</button>
                            <button className="delete-product-btn">Delete</button>
                                </div>
                           
                        </div>
                    ))}
                </div>
            </section>
            {showForm && (
                <div className="form-overlay">
                    <div className="form-container">
                    <p>{formMode === 'add' ? 'Add Product' : 'Update Product'}</p>
                    <button className="close-btn" onClick={handleCloseForm}>×</button>
                        <form >
                                <label htmlFor="product-name">Name:</label>
                                <input type="text" id="product-name" name="name" defaultValue={currentProduct ? currentProduct.name : ''} required />
                                <label htmlFor="product-description">Description:</label>
                                <input id="product-description" name="description" defaultValue={currentProduct ? currentProduct.description : ''} required />
                            <label htmlFor="product-price">Price:</label>
                            <input type="number" id="product-price" name="price" defaultValue={currentProduct ? currentProduct.price : ''} required />
                            <label htmlFor="product-category">Category:</label>
                            <select id="product-category" name="category" defaultValue={currentProduct ? currentProduct.category : ''} required>
                                <option value="">Select a Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Home">Home</option>
                                <option value="Sports">Sports</option>
                            </select>
                            <label htmlFor="product-image">Upload Image:</label>
                            <input type="file" id="product-image" name="image" accept="image/*"  />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ViewProducts;

import React, { useState } from "react";
import Button from "../../UI/Button";
import "./EditProduct.css";
const EditProduct = ({ product, title, onConfirm }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [badge, setBadge] = useState(product.badge);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(Number(e.target.value));
  };

  const handleBadgeChange = (e) => {
    setBadge(e.target.value);
  };

  const handleConfirm = () => {
    const updatedProduct = {
      ...product,
      name: name,
      price: price,
      badge: badge,
    };
    onConfirm(updatedProduct);
  };

  return (
    <div>
      <div className="">
        <header className="header">
          <h2>{title}</h2>
        </header>
        <div className="content">
          <input type="text" value={name} onChange={handleNameChange} />
          <input type="number" value={price} onChange={handlePriceChange} />
          <input type="text" value={badge} onChange={handleBadgeChange} />
        </div>
        <footer className="actions">
          <Button onClick={handleConfirm}>Edit</Button>
        </footer>
      </div>
    </div>
  );
};

export default EditProduct;

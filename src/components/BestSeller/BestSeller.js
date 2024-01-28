import axios from "axios";
import { useEffect, useState } from "react";
import BestSellerItem from "./BestSellerItem";
import EditProduct from "./EditProduct";

import "./BestSeller.css";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    axios
      .get("https://65b5ce6eda3a3c16abfff78f.mockapi.io/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product, editable]);

  const handleDelete = (id) => {
    axios
      .delete(`https://65b5ce6eda3a3c16abfff78f.mockapi.io/products/${id}`)
      .then((res) => {
        const newProducts = post.filter((item) => item.id !== id);
        setProducts(newProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (id) => {
    axios
      .get(`https://65b5ce6eda3a3c16abfff78f.mockapi.io/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setEditable(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = (product) => {
    axios
      .put(
        `https://65b5ce6eda3a3c16abfff78f.mockapi.io/products/${product.id}`,
        product
      )
      .then((res) => {
        setProduct(null);
        setEditable(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!products.length) return null;
  return (
    <div>
      <section id="best-seller">
        <div className="container">
          <div className="best-seller">
            <div className="best-seller-content-text">
              <p>Best Seller</p>
            </div>
            <div className="best-seller-content">
              <div className="best-seller-content-slider">
                {products.map((item) => (
                  <BestSellerItem
                    key={item.id}
                    item={item}
                    onDelete={() => handleDelete(item.id)}
                    onEdit={() => handleEdit(item.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {editable && (
        <EditProduct
          product={product}
          title={"Edit Product"}
          onConfirm={handleSave}
        />
      )}
    </div>
  );
};

export default BestSeller;

import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import Button from "../../UI/Button";
import BestSellerItem from "./BestSellerItem";
import EditProduct from "./EditProduct";

import "./BestSeller.css";

const BestSeller = ({admin}) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [dashboard, setDashboard] = useState(admin);
  const [editable, setEditable] = useState(false);
  const [creatable, setCreatable] = useState(false);

  useEffect(() => {
    axios
      .get("https://65b5ce6eda3a3c16abfff78f.mockapi.io/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product, editable, creatable]);

  const handleDelete = (id) => {
    axios
      .delete(`https://65b5ce6eda3a3c16abfff78f.mockapi.io/products/${id}`)
      .then((res) => {
        const newProducts = products.filter((item) => item.id !== id);
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

  const editProduct = (product) => {
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

  const createProduct = (product) => {
    let newProduct = {
      ...product,
      id: Math.random().toString(),
    };
    axios
      .post(`https://65b5ce6eda3a3c16abfff78f.mockapi.io/products`, newProduct)
      .then((res) => {
        setProduct(null);
        setCreatable(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = (product) => {
    if (editable) {
      editProduct(product);
    } else if (creatable) {
      createProduct(product);
    }
  };

  const handleCreate = () => {
    setCreatable(true);
  };

  const handleCancel = () => {
    setCreatable(false);
    setEditable(false);
    setProduct(null);
  };

  if (!products.length) return null;
  return (
    <div>
      <section id="best-seller">
        <div className="container">
          <div className="best-seller ">
            <Row className="py-5">
              <div className="col-8 best-seller-content-text justify-content-start">
                <p>Best Seller</p>
              </div>
              {dashboard && (
                <div className="col-4 d-flex justify-content-end ">
                  <Button className="btn btn-primary" onClick={handleCreate}>
                    Add Product
                  </Button>
                </div>
              )}
            </Row>
            <div className="best-seller-content">
              <div className="best-seller-content-slider">
                {products.map((item) => (
                  <BestSellerItem
                    key={item.id}
                    item={item}
                    dashboard={dashboard}
                    onDelete={() => handleDelete(item.id)}
                    onEdit={() => handleEdit(item.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {(editable || creatable) && (
        <EditProduct
          product={product}
          title={editable ? "Edit Product" : "Add Product"}
          onConfirm={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default BestSeller;

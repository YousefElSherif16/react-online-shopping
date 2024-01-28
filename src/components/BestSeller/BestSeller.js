import axios from "axios";
import { useEffect, useState } from "react";
import BestSellerItem from "./BestSellerItem";

import "./BestSeller.css";

const BestSeller = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://65b5ce6eda3a3c16abfff78f.mockapi.io/products")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!post.length) return null;
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
                {post.map((item) => (
                  <BestSellerItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestSeller;

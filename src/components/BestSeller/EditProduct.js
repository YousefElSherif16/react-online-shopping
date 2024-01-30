import React from "react";
import Modal from "../../UI/Modal";
const EditProduct = ({ product, title, onConfirm, onCancel }) => {
  return (
    <Modal
      product={product}
      title={title}
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
};

export default EditProduct;

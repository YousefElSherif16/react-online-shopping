import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./Modal.module.css";
import Card from "./Card";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const [name, setName] = useState(props.product ? props.product.name : "");
  const [price, setPrice] = useState(props.product ? props.product.price : "");
  const [badge, setBadge] = useState(props.product ? props.product.badge : "");

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
      ...props.product,
      name: name,
      price: price,
      badge: badge,
    };
    props.onConfirm(updatedProduct);
  };

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <input type="text" value={name} onChange={handleNameChange} />
        <input type="number" value={price} onChange={handlePriceChange} />
        <input type="text" value={badge} onChange={handleBadgeChange} />
      </div>
      <footer className={classes.actions}>
        <Button className={classes.cancelButton} onClick={handleCancel}>
          Cancel
        </Button>
        <Button className={classes.editButton} onClick={handleConfirm}>
          Save
        </Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay {...props} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;

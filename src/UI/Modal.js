import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./Modal.module.css";
import Card from "./Card";
import FileBase from "react-file-base64";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const [name, setName] = useState(props.product ? props.product.name : "");
  const [price, setPrice] = useState(props.product ? props.product.price : "");
  const [badge, setBadge] = useState(props.product ? props.product.badge : "");
  const [file, setFile] = useState(props.product ? props.product.image : "");

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
      image: file,
    };
    props.onConfirm(updatedProduct);
  };

  const handleCancel = () => {
    props.onCancel();
  };

  const handleImageChange = (base64) => {
    setFile(base64);
  };

  return (
    <Card
      className={classes.modal}
      style={{
        overflowY: "scroll",
      }}
    >
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={handlePriceChange}
        />
        <label htmlFor="badge">Badge</label>
        <input
          type="text"
          id="badge"
          value={badge}
          onChange={handleBadgeChange}
        />
        <label htmlFor="image">Image</label>
        {file && (
          <div>
            <img
              src={file}
              alt="product"
              style={{ width: "25%", height: "25%", marginRight: "1rem" }}
            />
            <Button className={"btn btn-secondary"} onClick={() => setFile("")}>
              Remove Image
            </Button>
          </div>
        )}
        {!file && (
          <FileBase
            id="image"
            type="file"
            multiple={false}
            defaultValue={file}
            onDone={({ base64 }) => handleImageChange(base64)}
          />
        )}
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

import React from "react";
import { useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import axiosInstance from "../myaxios";
import { BACKEND_URL } from "../constants";

const Checkout = () => {
  const selectedProducts = useSelector((state) => state.selectedProducts);

  const performCheckout = async () => {
    const res = await axiosInstance.post(`/checkouts`, {
      products: selectedProducts,
    });
    await res.data;
    alert("OK");
  };
  return (
    <div>
      <h1>Checkout</h1>
      <div>
        {selectedProducts != null
          ? selectedProducts.map((p, i) => (
              <Card style={{ width: "10rem" }}>
                <Card.Img
                  variant="left"
                  style={{ width: "100px", height: "100px" }}
                  src={`${BACKEND_URL}/images/thumb_${p.productImage}.jpg`}
                />

                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Subtitle>{p.price}</Card.Subtitle>
                </Card.Body>
              </Card>
            ))
          : null}
      </div>
      <Button variant="success" onClick={performCheckout}>
        Perform Checkout
      </Button>
    </div>
  );
};

export default Checkout;

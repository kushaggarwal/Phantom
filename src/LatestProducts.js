import { Container, Image } from "react-bootstrap";

import React from "react";

const LatestProducts = () => {
  return (
    <div>
      <Container>
        <div style={{ marginTop: "100px" }}>
          <h2 style={{ textAlign: "center" }}>LATEST PRODUCTS</h2>
        </div>
        <div
          style={{
            marginTop: "50px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image style={{ width: "25%" }} src="/images/products/1.JPG" />
          <Image style={{ width: "25%" }} src="/images/products/2.JPG" />
          <Image style={{ width: "25%" }} src="/images/products/3.JPG" />
          <Image style={{ width: "25%" }} src="/images/products/4.JPG" />
        </div>
      </Container>
    </div>
  );
};

export default LatestProducts;

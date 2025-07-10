import React from "react";

const ProductList = ({ products, setCart }) => {
  return (
    <div className="product-list">
      {products?.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => setCart((cart)=>[...cart,product])}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
import React from "react";

const ProductList = ({ products, setCart }) => {
  return (
    <div className="product-list">
      {products?.map((product) => (
          <div className="row-md-12" >
            <div className="col-md-4" key={product.id}>
              <h3>{product.name}</h3>
              <button onClick={() => setCart((cart) => [...cart, product])}>
                Add to Cart
              </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

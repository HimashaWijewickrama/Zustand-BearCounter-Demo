import React from "react";

const Cart = ({ cart, setCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <button onClick={() => setCart([])}>Clear Cart</button>
          <p>Total Items: {cart.length}</p>

          {cart.map((product) => (
            <div key={product.id} className="container">
              <div className="row-md-12">
                <div className="col-md-4">
                  <h3>{product.name}</h3>
                  <button
                    onClick={() =>
                      setCart(cart.filter((productItem) => productItem.id !== product.id))
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

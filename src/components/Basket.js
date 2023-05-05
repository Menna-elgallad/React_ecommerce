import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 30;
  const totalPrice = itemsPrice + shippingPrice;
 if(totalPrice==2000)
 {shippingPrice=0}


  return (
    <div className="block2">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div align="center">The cart is empty!</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x EGP{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">EGP{itemsPrice.toFixed(2)}</div>
            </div>
           
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                EGP{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <h2>EGP{totalPrice.toFixed(2)}</h2>
              </div>
            </div>
            <hr />
            <div className="row">
               <button> Checkout</button>
               
            </div>
          </>
        )}
      </div>
    </div>
  );
}
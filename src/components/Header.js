  
import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
     
      <div >
        <a align="left" href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
      </div>
    </header>
  );
}
import React from 'react';
 
export default function Basket(props){
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.quant * c.price, 0);

    return (
      <aside className="block col-1">
        <h2> Carrinho de compras </h2>
        <div>
          {cartItems.length === 0 && <div> O carrinho está vazio </div>}
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
                {item.quant} x R${item.price.toFixed(2)}
              </div>
            </div>
          ))}
  
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
  
              <div className="row">
                <div className="col-2">
                  <strong>Valor total:</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${itemsPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <button onClick={() => alert('Compra realizada com sucesso!')}>
                  Comprar
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    );
  } 

import React , { useState } from "react";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Main from "./components/Main";
import data from "./mock-products";

function App() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist){
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, quant: exist.quant+1 } : x
          )
        );
      }else{
        setCartItems([...cartItems, {...product, quant:1 }]);
      }
    };

    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.quant === 1){
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      }else{
        setCartItems(
          cartItems.map((x) => 
            x.id === product.id ? { ...exist, quant: exist.quant-1 } : x
          )
        );
      }
    };

    return (
        <div className = "App">
          <Header> countCartItems = { cartItems.length } </Header>
          <div className = "row">
            <Main products={products} onAdd={ onAdd }></Main>
            <Basket
              cartItems = { cartItems }
              onAdd = { onAdd }
              onRemove = { onRemove }>
            </Basket>
          </div>
        </div>
      );
  
}

export default App;
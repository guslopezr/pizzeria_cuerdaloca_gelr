import React, { useEffect, useState } from "react";
import Context from "../../Context/Context";
import { useContext } from "react";
import "./styles.css";

function Cart() {
  let { total, setTotal } = useContext(Context);
  const { cart } = useContext(Context);
  const [quantity, setQuantity] = useState([]);

  let subtotal = 0;
  let result = 0;

  const btnAddHandler = (item) => {
    item.count = item.count + 1;
    setQuantity(item.count);
  };

  const btnDeleteHandler = (item, i) => {
    if (item.count === 0) {
      cart.splice(i, 1);
    }
    item.count = item.count - 1;
    setQuantity(item.count);
  };

  useEffect(() => {
    for (let item of cart) {
      subtotal = item.price * item.count;
      result = subtotal + result;
    }
    setTotal(result);
    result = 0;
  }, [quantity, btnAddHandler, btnDeleteHandler, cart]);

  return (
    <div className="cart-container">
      <h3 className="cart-order-list">Detalles de tu orden:</h3>
      <div className="cart-info">
        <ul className="cart-list">
          {cart.map((item, i) => (
            <li key={i} className="cart-item">
              <div className="cart-img-container">
                <img
                  src={item.img}
                  alt="cart-img"
                  className="cart-item-img"
                ></img>
              </div>
              <h3 className="cart-item-name">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </h3>
              <h3 className="cart-subtotal">
                Sub total: {item.price * item.count}
              </h3>
              <div className="cart-buttons">
                <button
                  className="cart-add btn-mrgn"
                  onClick={() => btnAddHandler(item)}
                >
                  Añadir
                </button>
                <h3 className="cart-item-quantity btn-mrgn">{item.count}</h3>

                <button
                  className="cart-delete btn-mrgn"
                  onClick={() => btnDeleteHandler(item, i)}
                >
                  Borrar
                </button>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="cart-total">Total de la orden: {total ? "$"+ total : "   No hay nada en el carrito!"}</h3>
        <button className="button-pay" onClick={() => total=== 0 ? alert("No tienes ítems en tu carro"):alert("Redireccionando al portal de pago")}>Click para pagar</button>
      </div>
    </div>
  );
}

export default Cart;

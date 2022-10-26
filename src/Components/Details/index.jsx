import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Context from "../../Context/Context";
import cuerdalocasolo from "../../Assets/Imgs/cuerdalocasolo.png"
import newbag from "../../Assets/Imgs/newbag.png"
import "./styles.css";

function Details() {
  const [pizza, setPizza] = useState([]);
  const pizzaId = useParams("");
  const { pizzas } = useContext(Context);
  let { setTotal } = useContext(Context);
  const { cart, setCart } = useContext(Context);
  let subtotal = 0;
  let result = 0;

  const filter = (id) => {
    const result = pizzas.filter((item) => item.id === id);
    setPizza(result);
  };

  const addItem = ({ id, name, img, price }) => {
    const findPizzaId = cart.findIndex((item) => item.id === id);
    const pizza = { id, name, img, price, count: 1 };

    if (findPizzaId >= 0) {
      cart[findPizzaId].count++;
      setCart([...cart]);
    } else {
      setCart([...cart, pizza]);
    }
  };

  useEffect(() => {
    filter(pizzaId.id);
    for (let item of cart) {
      subtotal = item.price * item.count;
      result = subtotal + result;
    }
    setTotal(result);
    result = 0;
  }, [pizzas, pizzaId, cart]);

  return (
    <div className="details-container">
      {pizza.map((item, i) => (
        <div key={i} className="details-box">
          <div className="details-img-container">
            <img className="details-img" src={item.img} alt="" />
          </div>
          <div className="details">
            <div className="details-name">
              <h3>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h3>
            </div>
            <div className="description-details">
              <p>{item.desc}</p>
            </div>
            <div className="ingredients-details">
              <ul className="ingredients-list-details">
                {item.ingredients.map((ingredient) => (
                  <li
                    className="ingredient-details"
                    key={item.ingredients.indexOf(ingredient)}
                  >
                    <img className="li-img" src={cuerdalocasolo} alt=""></img>
                    {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="price-details">
              <h3 className="price-title-details">Precio Item: ${item.price}</h3>
              <button  className="cesta" onClick={() => addItem(item)}>
                Añadir a la cesta{" "}
                <img className="button-img" src={newbag} alt="italian-hand"></img>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;

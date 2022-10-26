import React from "react";
import "./styles.css";
import newbag from "../../Assets/Imgs/newbag.png";
import cuerdalocablanco from "../../Assets/Imgs/cuerdalocablanco.png";
import Context from "../../Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  let { total } = useContext(Context);

  return (
    <div className="navbarmain">
      <div className="navbar">
        <div className="navbar-brand" onClick={() => navigate(`../../`)}>
          <img className="brand-img" src={cuerdalocablanco} alt="pizza-icon" />
          <h3 className="brand-name">Pizzería La Cuerda Loca</h3>
        </div>
        <div className="cart" onClick={() => navigate(`../../Views/ViewCart`)}>
          <img className="cart-icon" src={newbag} alt="bag-icon" />
          <h3 className="cart-total-nav">Total: {total}</h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

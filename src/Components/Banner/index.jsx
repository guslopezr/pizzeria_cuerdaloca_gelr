import React from "react";
import "./styles.css";
import longbanner from "../../Assets/Imgs/bannerpizzeria3.png";

function Banner() {
  return (
    <>
      <div className="banner-container">
        <div className="redbanner">
          <img id="redbanner" src={longbanner} alt="" srcset="" />
        </div>
      </div>

      <div className="bannertext">
        <h3 className="banner-title">¡Conoce la verdadera pizza italiana!</h3>

        <h5 className="banner-title2">
          Ingredientes orgánicos y masa a la piedra
        </h5>
      </div>
    </>
  );
}

export default Banner;

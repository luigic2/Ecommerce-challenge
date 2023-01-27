import "./Navbar.css";
import "../imgs/font-awesome-4.7.0/css/font-awesome.min.css";
import "./Card.js";
import Card from "./Card.js";
import roupas from "../Arrays/roupas";
import React, { useEffect, onMouseEnter, onMouseLeave, useRef } from "react";

function CardSec(){

  // return roupas.map((x)=> {if(x.size == "P"){return <Card name={x.name} size={x.size} price={x.price} />;}} );
  return roupas.map((x)=> <Card name={x.name} size={x.size} price={x.price} /> );

}

function Navbar() {




  return (
    <div className="Navbar-main">
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <div className="sections-spliter">
          <div className="Navbar-div flexer">
            <div className="Navbar-subdiv-cat">
              <div className="Navbar-subdiv-spacer container"></div>

              <a
                className="hover container"
               
                href="#"
              >
                <p className="Navbar-subdiv-text">Tamanhos</p>
              </a>
              <div className="flexer justify-cont-center container">
                <a className="hover size-buttons-1" draggable="true">
                  <p className="Navbar-size-text">P</p>
                </a>
                <a className="hover size-buttons-1" draggable="true">
                  <p className="Navbar-size-text">M</p>
                </a>
                <a className="hover size-buttons-1" draggable="true">
                  <p className="Navbar-size-text">G</p>
                </a>
                <a className="hover size-buttons-2" draggable="true">
                  <p className="Navbar-size-text">GG</p>
                </a>
                <a className="hover size-buttons-2" draggable="true">
                  <p className="Navbar-size-text">XL</p>
                </a>
              </div>
            </div>
          </div>

          <div className="right-bar">
            <div className="misc-bar">

            </div>
            <div className="card-section">
            <div className=" container  card-columns">
           
                
              <CardSec />
            
            </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

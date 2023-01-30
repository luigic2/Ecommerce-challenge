import "./Navbar.css";
import "../imgs/font-awesome-4.7.0/css/font-awesome.min.css";
import "../molecules/Card.js";
import CardSec from "./CardSec";
import React, {
  useEffect,
  onMouseEnter,
  onMouseLeave,
  useRef,
  useState,
} from "react";
let chosen = false;
var sizestate = "";
var sizecomparison = "1";
console.log(sizestate);
var chosensize = "";

function CardSecP() {
  let cardident = 0;
  var cardcol = document.querySelector(".card-columns").childNodes;

  if (chosen == true || chosensize != "P") {
    for (cardident = 0; cardident < cardcol.length; cardident++) {
      cardcol[cardident].style.display = null;
    }
    if (chosensize != "P" ) {
      for (let cardident = 0; cardident < cardcol.length; cardident++) {
        if (
          cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
            .childNodes[1].innerHTML != "P"
        ) {
          if (cardcol[cardident].style.display == "none") {
            cardcol[cardident].style.display = null;
          } else {
            document.querySelector(".card-columns").childNodes[
              cardident
            ].style.display = "none";
            chosen = true;
            chosensize = "P";
          }
        } else {
        }
      }
    }
    chosen = false;
  } else {
    for (cardident = 0; cardident < cardcol.length; cardident++) {
      if (
        cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
          .childNodes[1].innerHTML != "P"
      ) {
        if (cardcol[cardident].style.display == "none") {
          cardcol[cardident].style.display = null;
        } else {
          document.querySelector(".card-columns").childNodes[
            cardident
          ].style.display = "none";
          chosen = true;
          chosensize = "P";
        }
      } else {
      }
    }
  }
}

function CardSecM() {
  let cardident = 0;
  var cardcol = document.querySelector(".card-columns").childNodes;

  if (chosen == true || chosensize != "M") {
    for (cardident = 0; cardident < cardcol.length; cardident++) {
      cardcol[cardident].style.display = null;
    }
    if (chosensize != "M" ) {
      for (let cardident = 0; cardident < cardcol.length; cardident++) {
        if (
          cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
            .childNodes[1].innerHTML != "M"
        ) {
          if (cardcol[cardident].style.display == "none") {
            cardcol[cardident].style.display = null;
          } else {
            document.querySelector(".card-columns").childNodes[
              cardident
            ].style.display = "none";
            chosen = true;
            chosensize = "M";
          }
        } else {
        }
      }
    }
    chosen = false;
  } else {
    for (cardident = 0; cardident < cardcol.length; cardident++) {
      if (
        cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
          .childNodes[1].innerHTML != "M"
      ) {
        if (cardcol[cardident].style.display == "none") {
          cardcol[cardident].style.display = null;
        } else {
          document.querySelector(".card-columns").childNodes[
            cardident
          ].style.display = "none";
          chosen = true;
          chosensize = "M";
        }
      } else {
      }
    }
  }
}


function CardSecG() {
  let cardident = 0;
  var cardcol = document.querySelector(".card-columns").childNodes;

  if (chosen == true || chosensize != "G") {
    for (cardident = 0; cardident < cardcol.length; cardident++) {
      cardcol[cardident].style.display = null;
    }
    if (chosensize != "G" ) {
      for (let cardident = 0; cardident < cardcol.length; cardident++) {
        if (
          cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
            .childNodes[1].innerHTML != "G"
        ) {
          if (cardcol[cardident].style.display == "none") {
            cardcol[cardident].style.display = null;
          } else {
            document.querySelector(".card-columns").childNodes[
              cardident
            ].style.display = "none";
            chosen = true;
            chosensize = "G";
          }
        } else {
        }
      }
    }
    chosen = false;
  } else {
    for (cardident = 0; cardident < cardcol.length; cardident++) {
      if (
        cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
          .childNodes[1].innerHTML != "G"
      ) {
        if (cardcol[cardident].style.display == "none") {
          cardcol[cardident].style.display = null;
        } else {
          document.querySelector(".card-columns").childNodes[
            cardident
          ].style.display = "none";
          chosen = true;
          chosensize = "G";
        }
      } else {
      }
    }
  }
}

function CardSecGG() {
  let cardident = 0;
  var cardcol = document.querySelector(".card-columns").childNodes;

  if (chosen == true || chosensize != "GG") {
    for (cardident = 0; cardident < cardcol.length; cardident++) {
      cardcol[cardident].style.display = null;
    }
    if (chosensize != "GG" ) {
      for (let cardident = 0; cardident < cardcol.length; cardident++) {
        if (
          cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
            .childNodes[1].innerHTML != "GG"
        ) {
          if (cardcol[cardident].style.display == "none") {
            cardcol[cardident].style.display = null;
          } else {
            document.querySelector(".card-columns").childNodes[
              cardident
            ].style.display = "none";
            chosen = true;
            chosensize = "GG";
          }
        } else {
        }
      }
    }
    chosen = false;
  } else {
    for (cardident = 0; cardident < cardcol.length; cardident++) {
      if (
        cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
          .childNodes[1].innerHTML != "GG"
      ) {
        if (cardcol[cardident].style.display == "none") {
          cardcol[cardident].style.display = null;
        } else {
          document.querySelector(".card-columns").childNodes[
            cardident
          ].style.display = "none";
          chosen = true;
          chosensize = "GG";
        }
      } else {
      }
    }
  }


}

function CardSecXL() {
  let cardident = 0;
  var cardcol = document.querySelector(".card-columns").childNodes;

  if (chosen == true || chosensize != "XL") {
    for (cardident = 0; cardident < cardcol.length; cardident++) {
      cardcol[cardident].style.display = null;
    }
    if (chosensize != "XL" ) {
      for (let cardident = 0; cardident < cardcol.length; cardident++) {
        if (
          cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
            .childNodes[1].innerHTML != "XL"
        ) {
          if (cardcol[cardident].style.display == "none") {
            cardcol[cardident].style.display = null;
          } else {
            document.querySelector(".card-columns").childNodes[
              cardident
            ].style.display = "none";
            chosen = true;
            chosensize = "XL";
          }
        } else {
        }
      }
    }
    chosen = false;
  } else {
    for (cardident = 0; cardident < cardcol.length; cardident++) {
      if (
        cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
          .childNodes[1].innerHTML != "XL"
      ) {
        if (cardcol[cardident].style.display == "none") {
          cardcol[cardident].style.display = null;
        } else {
          document.querySelector(".card-columns").childNodes[
            cardident
          ].style.display = "none";
          chosen = true;
          chosensize = "XL";
        }
      } else {
      }
    }
  }
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

              <a className="hover container" href="#">
                <p className="Navbar-subdiv-text">Tamanhos</p>
              </a>
              <div className="flexer justify-cont-center container">
                <a
                  className="hover size-buttons-1"
                  onClick={CardSecP}
                  draggable="true"
                >
                  <p className="Navbar-size-text">P</p>
                </a>
                <a
                  className="hover size-buttons-1"
                  onClick={CardSecM}
                  draggable="true"
                >
                  <p className="Navbar-size-text">M</p>
                </a>
                <a
                  className="hover size-buttons-1"
                  onClick={CardSecG}
                  draggable="true"
                >
                  <p className="Navbar-size-text">G</p>
                </a>
                <a
                  className="hover size-buttons-2"
                  onClick={CardSecGG}
                  draggable="true"
                >
                  <p className="Navbar-size-text">GG</p>
                </a>
                <a
                  className="hover size-buttons-2"
                  onClick={CardSecXL}
                  draggable="true"
                >
                  <p className="Navbar-size-text">XL</p>
                </a>
              </div>
            </div>
          </div>

          <div className="right-bar">
            <div className="misc-bar"></div>
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



let chosen = false;
var chosensize = "";

// ------------------------------------------ Função que faz com que todos os cartões de roupas, com exceção dos de tamanho "P" sumam,
// ------------------------------------------ e se clicado novamente reapareçam

function CardSecP() {
    let cardident = 0;
    var cardcol = document.querySelector(".card-columns").childNodes;
  
    if (chosen == true || chosensize != "P") {
      for (cardident = 0; cardident < cardcol.length; cardident++) {
        cardcol[cardident].style.display = null;
      }
      if (chosensize != "P") {
        for (let cardident = 0; cardident < cardcol.length; cardident++) {
          if (
            cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
              .childNodes[2].innerHTML != "P"
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
            .childNodes[2].innerHTML != "P"
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
  // ------------------------------------------ Função que faz com que todos os cartões de roupas, com exceção dos de tamanho "M" sumam,
  // ------------------------------------------ e se clicado novamente reapareçam
  function CardSecM() {
    let cardident = 0;
    var cardcol = document.querySelector(".card-columns").childNodes;
  
    if (chosen == true || chosensize != "M") {
      for (cardident = 0; cardident < cardcol.length; cardident++) {
        cardcol[cardident].style.display = null;
      }
      if (chosensize != "M") {
        for (let cardident = 0; cardident < cardcol.length; cardident++) {
          if (
            cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
              .childNodes[2].innerHTML != "M"
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
            .childNodes[2].innerHTML != "M"
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
  
  // ------------------------------------------ Função que faz com que todos os cartões de roupas, com exceção dos de tamanho "G" sumam,
  // ------------------------------------------ e se clicado novamente reapareçam
  function CardSecG() {
    let cardident = 0;
    var cardcol = document.querySelector(".card-columns").childNodes;
  
    if (chosen == true || chosensize != "G") {
      for (cardident = 0; cardident < cardcol.length; cardident++) {
        cardcol[cardident].style.display = null;
      }
      if (chosensize != "G") {
        for (let cardident = 0; cardident < cardcol.length; cardident++) {
          if (
            cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
              .childNodes[2].innerHTML != "G"
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
            .childNodes[2].innerHTML != "G"
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
  // ------------------------------------------ Função que faz com que todos os cartões de roupas, com exceção dos de tamanho "GG" sumam,
  // ------------------------------------------ e se clicado novamente reapareçam
  function CardSecGG() {
    let cardident = 0;
    var cardcol = document.querySelector(".card-columns").childNodes;
  
    if (chosen == true || chosensize != "GG") {
      for (cardident = 0; cardident < cardcol.length; cardident++) {
        cardcol[cardident].style.display = null;
      }
      if (chosensize != "GG") {
        for (let cardident = 0; cardident < cardcol.length; cardident++) {
          if (
            cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
              .childNodes[2].innerHTML != "GG"
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
            .childNodes[2].innerHTML != "GG"
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
  // ------------------------------------------ Função que faz com que todos os cartões de roupas, com exceção dos de tamanho "XL" sumam,
  // ------------------------------------------ e se clicado novamente reapareçam
  function CardSecXL() {
    let cardident = 0;
    var cardcol = document.querySelector(".card-columns").childNodes;
  
    if (chosen == true || chosensize != "XL") {
      for (cardident = 0; cardident < cardcol.length; cardident++) {
        cardcol[cardident].style.display = null;
      }
      if (chosensize != "XL") {
        for (let cardident = 0; cardident < cardcol.length; cardident++) {
          if (
            cardcol[cardident].childNodes[0].childNodes[0].childNodes[0]
              .childNodes[2].innerHTML != "XL"
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
            .childNodes[2].innerHTML != "XL"
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

  export {CardSecP, CardSecM, CardSecG, CardSecGG, CardSecXL};
import "./Card.css";
import "../imgs/font-awesome-4.7.0/css/font-awesome.min.css";
import React, { useEffect, onMouseEnter, onMouseLeave, useRef } from "react";
import CardContent from "../atoms/CardContent";

// Função onde juntamos os artifices graficos do cartão com seu conteudo e colocamos tudo dentro de uma div organizada e estilizada, além da requisição
// dos props que serão entregues mais para frente
function Card(props) {

// Codigo da função do movimento do cartão e da luz projetada no mesmo ao passar o Mouse por cima dele  
  let bounds;

  const inputRef = useRef();
  const glowRef = useRef();
  const rotateToMouse = (e) => {
    bounds = inputRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    inputRef.current.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
    glowRef.current.style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
  };
  const removeListener = (e) => {
    inputRef.current.style.transform = "";
    inputRef.current.style.background = "";
  };
  useEffect(() => {});



// Local onde enviamos o cartão e seus agregados para quem importar ele
  return (
    <div
      className="Card-main"
      ref={inputRef}
      onMouseLeave={removeListener}
      onMouseMove={rotateToMouse}
    >
      <div className="card-hover" ref={glowRef}>
        <div className="Card-filling ">
          
        <CardContent data={props} />
        </div>
      </div>
    </div>
  );
}

export default Card;

import "./Card.css";
import "../imgs/font-awesome-4.7.0/css/font-awesome.min.css";
import React, { useEffect, onMouseEnter, onMouseLeave, useRef } from "react";

function Person({data: {name, size, price}}) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{size}</h2>
      <h2>{price}</h2>
    </div>
  );
}
 

function Card(props) {
 
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
    // console.log(center.y / 100);
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




  return (
    <div
      className="Card-main"
      ref={inputRef}
      onMouseLeave={removeListener}
      onMouseMove={rotateToMouse}
    >
      <div className="card-hover" ref={glowRef}>
        <div className="Card-filling ">
          
        <Person data={props} />
        </div>
      </div>
    </div>
  );
}

export default Card;

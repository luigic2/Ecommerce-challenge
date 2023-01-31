
import React, { useEffect, onMouseEnter, onMouseLeave, useRef, useState } from "react";
import roupas from "../Arrays/roupas";
import Card from "../molecules/Card.js";

// Seção onde, para cada objeto dentro do array "roupa", nos Juntamos uma molecula "Card" com os Props que estão sendo requisitados pela molecula,
// além de inserirmos uma classe na molecula

function CardSec(){


  

    return roupas.map((x)=> <Card className="card-class card-standard" name={x.name} size={x.size} price={x.price} img={x.img} /> );

  
}

export default CardSec;

import React, { useEffect, onMouseEnter, onMouseLeave, useRef, useState } from "react";
import roupas from "../Arrays/roupas";
import Card from "../molecules/Card.js";

function CardSec(){


  

    return roupas.map((x)=> <Card className="card-class card-standard" name={x.name} size={x.size} price={x.price} /> );

  
}

export default CardSec;
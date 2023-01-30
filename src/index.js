import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./organisms/Navbar";
import roupas from "./Arrays/roupas"






 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

<React.StrictMode>
          {/* Seção onde puxamos tudo no nosso codigo para que possa ser renderizado no root */}

    <div className="index-div">
      <Navbar />
    </div>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

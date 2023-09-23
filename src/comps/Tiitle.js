import React from "react";
import {Logo} from "./styled"; // Importuj logo z katalogu src

export const Title = () => {
  return (
    <div className="title">
      <Logo/>
      <h1>OLIMPIC EKIPA</h1>
      <h2>"Kto znalazł przyjaciela, skarb znalazł"</h2>
    </div>
  );
};

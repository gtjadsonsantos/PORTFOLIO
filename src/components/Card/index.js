import React from "react";

import "./styles.css";


export default function Cart({ url, img }) {
  return (
      <a href={url}>
        <img src={img} alt="picture image" />
      </a>
  );
}


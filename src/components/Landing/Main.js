import React, { useState } from "react";
import classes from "./Main.module.css";

export default function Main(props) {
  const data = props.data;

  const [selected, setSelected] = useState("");
  const [price, setPrice] = useState("");

  const showPrice = () => {
    setPrice(`$ ${JSON.parse(selected).price.toFixed(2)}`);
  };

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h2>Looking for Crypto prices?</h2>
        <h1 className={classes.title}>One Stop Shop. One Place.</h1>
      </div>

      <div className={classes.right}>
        <div className={classes.box}>
          <h2>Coin</h2>

          <select
            className={classes.input}
            value={selected}
            onChange={(e) => {
              setSelected(e.target.value);
              setPrice(`$ ${JSON.parse(e.target.value).price.toFixed(2)}`);
            }}
          >
            <option value="">Choose..</option>
            {data.map((i) => (
              <option value={JSON.stringify(i)} key={i.id}>
                {" "}
                {i.name}
              </option>
            ))}
          </select>

          <br />

          <h2>Price</h2>

          <input type="text" className={classes.input} value={price} readOnly />

          <br />
        </div>
      </div>
    </div>
  );
}

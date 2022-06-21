import React from "react";
import classes from "./CryptoData.module.css";

export default function CryptoData(props) {
  return (
    <>
      <marquee>
        <div className={classes.marquee}>
          {props.data.map((i) => (
            <div className={classes.marquee__item} key={i.id}>
              <p>{i.name} &nbsp;&nbsp;</p>
              <p>${i.price.toFixed(2)}&nbsp;&nbsp;</p>

              <p style={{ color: i.change > 0 ? "lightgreen" : "red" }}>
                <span>{i.change > 0 ? `\u2191` : `\u2193`} &nbsp;</span>
                {i.change.toFixed(1)}%
              </p>
            </div>
          ))}
        </div>
      </marquee>
    </>
  );
}

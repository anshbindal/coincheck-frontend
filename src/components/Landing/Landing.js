import React from "react";
import classes from "./Landing.module.css";
import Header from "./Header";
import Main from "./Main";
import CryptoData from "./CryptoData";
export default function Landing(props) {
  return (
    <div className={classes.landing}>
      <CryptoData data={props.data} />
      <Header />
      <Main data={props.data} />
    </div>
  );
}

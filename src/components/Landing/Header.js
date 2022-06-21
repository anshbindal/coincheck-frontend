import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <h1 className={classes.title}>COINCHECK</h1>
    </div>
  );
}

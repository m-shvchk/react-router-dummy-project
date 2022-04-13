import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./Comp.module.css";

const Comp = () => {
  const location = useLocation();
  const { id, title, order } = location.state;
  const tabDescription = (
    <div className={classes.description}>
      <h1>{title}</h1>
      <p>
        This is a {id}. Component #{order + 1}
      </p>
    </div>
  );

  return <div className={classes.comp}>{tabDescription}</div>;
};

export default Comp;

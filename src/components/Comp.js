import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import classes from "./Comp.module.css";
const DummyChart = React.lazy(() => import("./dummyChart"));
const DummyList = React.lazy(() => import("./dummyList"));
const DummyTable = React.lazy(() => import("./dummyTable"));

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

  if (id === "dummyTable") {
    return (
      // fallback component is rendered until our main component is loaded
      <Suspense fallback={<div>Loading...</div>}>
        <div className={classes.comp}>{tabDescription}</div>
        <DummyTable />
      </Suspense>
    );
  } else if (id === "dummyChart") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className={classes.comp}>{tabDescription}</div>
        <DummyChart />
      </Suspense>
    );
  }else{
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className={classes.comp}>{tabDescription}</div>
        <DummyList />
      </Suspense>
    );
  }
};

export default Comp;

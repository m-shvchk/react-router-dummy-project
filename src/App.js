import { NavLink, Route } from "react-router-dom";
import classes from "./App.module.css";
import Comp from "./components/Comp";

function App() {
  const data = [
    {
      id: "dummyTable",
      title: "Dummy Table",
      order: 1,
      path: "tabs/dummyTable.js",
    },
    {
      id: "dummyChart",
      title: "Dummy Chart",
      order: 2,
      path: "tabs/dummyChart.js",
    },
    {
      id: "dummyList",
      title: "Dummy List",
      order: 0,
      path: "tabs/dummyList.js",
    },
  ];
  const sortedData = data.sort((a, b) => {
    return a.order - b.order;
  });

  return (
    <div className={classes.app}>
      <nav>
        <ul>
          {sortedData.map((item) => {
            return (
              <li key={item.id}>
                <NavLink activeClassName={classes.active}
                  to={{
                    pathname: `/${item.path}`,
                    state: {
                      id: item.id,
                      title: item.title,
                      order: item.order,
                    },
                  }}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <Route path="/tabs/:identifier">
        <Comp items={sortedData} />
      </Route>
    </div>
  );
}

export default App;

// { {sortedData.map((item) => {
//   return (
//     <Route path={"/" + item.path} key={item.id}>
//     <Comp id={item.id} title={item.title} order={item.order}/>
//     </Route>
//   );
// })} }

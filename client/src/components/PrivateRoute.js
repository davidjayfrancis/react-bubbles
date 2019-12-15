import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest }) => {
  return (
    <Route
      {...theRest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          console.log("HERE IN PRIVTAE ROUTE");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

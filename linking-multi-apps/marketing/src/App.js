import React from "react";
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom/cjs/react-router-dom.min";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "ma",
  });
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing}></Route>
            <Route path="/" component={Landing}></Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

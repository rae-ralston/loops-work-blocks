import React from "react";
import "typeface-roboto";

import { NavDrawer } from "./components/nav/NavDrawer";
import PrimaryContainer from "./components/primary/PrimaryContainer";

const App = () => (
  <div>
    <NavDrawer />
    <PrimaryContainer />
  </div>
);

export default App;

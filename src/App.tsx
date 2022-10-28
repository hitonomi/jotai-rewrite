import React from "react";

import { PriceAtomComponent } from "./components/PriceAtomComponent";
import { ReadOnlyAtomComponent } from "./components/ReadOnlyAtomComponent";
import { ReadWriteAtomComponent } from "./components/ReadWriteAtomComponent";

function App() {
  return (
    <div className="App">
      <PriceAtomComponent />
      <ReadOnlyAtomComponent />
      <ReadWriteAtomComponent />
    </div>
  );
}

export default App;

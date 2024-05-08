// import { useState } from "react";

import ProductOverviewTwo from "./Component/Card";
import MovieData from "./Data/data";

function App() {
  return (
    <div>
      {MovieData.map((movie, index) => (
        <ProductOverviewTwo key={index} movie={movie} />
      ))}
    </div>
  );
}

export default App;

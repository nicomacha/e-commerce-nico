import { useState } from "react";
import { BarTop } from "./module/core/components/bar-top.component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BarTop text="Sign up and get 20% off to your first order. Sign Up Now" />
      <BarTop text="Hola" />
    </div>
  );
}

export default App;

import { useState } from "react";
import { BarTop } from "./module/core/components/bar-top.component";
import { Header } from "./module/core/components/header.component";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BarTop text="Sign up and get 20% off to your first order. Sign Up Now" />
      <Header />
    </div>
  );
}

export default App;

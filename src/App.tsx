import { CardProduct } from "./modules/core/components/card-product.component";
import { TittleText } from "./modules/core/components/tittle-text";
import { LayoutBase } from "./modules/features/layout/layout-base.component";

function App() {
  return (
    <LayoutBase>
      <div>
        <TittleText tittle="NUEVOS INGRESOS" />
        <CardProduct />
        <TittleText tittle="dasfasdf" />
      </div>
    </LayoutBase>
  );
}

export default App;

import { CardProduct } from './modules/core/components/card-product.component';
import { TitleText } from './modules/core/components/tittle-text';
import { LayoutBase } from './modules/core/components/layout/layout-base.component';

function App() {
  return (
    <LayoutBase>
      <div>
        <TitleText tittle='NUEVOS INGRESOS' />
        <CardProduct
          cta={() => {}}
          image={''}
          title='Remera God Maradona'
          price={123}
          rating={3}
        />

        <TitleText tittle='dasfasdf' />
      </div>
    </LayoutBase>
  );
}

export default App;

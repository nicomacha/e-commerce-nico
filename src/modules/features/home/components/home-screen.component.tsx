import { CardProduct } from '../../../core/components/card-product.component';
import { TitleText } from '../../../core/components/tittle-text';

export const HomeScreen = () => {
  return (
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
  );
};

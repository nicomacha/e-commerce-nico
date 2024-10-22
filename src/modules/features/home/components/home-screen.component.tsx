import { styled } from '@mui/material';

import { TitleText } from '@/src/modules/core/components/tittle-text';
import { CardProduct } from '@/src/modules/core/components/card-product.component';

import { products } from '../../../db/index';

export const HomeScreen = () => {
  return (
    <div>
      <TitleText tittle='NUEVOS INGRESOS' />
      <ContenedorProductos>
        {products.map((objetoEntero) => {
          return (
            <CardProduct
              key={objetoEntero.id}
              cta={() => {}}
              {...objetoEntero}
            />
          );
        })}
      </ContenedorProductos>

      <TitleText tittle='dasfasdf' />
    </div>
  );
};

const ContenedorProductos = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: 20,
  margin: 30,
});

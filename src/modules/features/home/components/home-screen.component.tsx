import { styled } from "@mui/material";
import { CardProduct } from "../../../core/components/card-product.component";
import { TitleText } from "../../../core/components/tittle-text";
import { products } from "../../../db/index";

export const HomeScreen = () => {
  return (
    <div>
      <TitleText tittle="NUEVOS INGRESOS" />
      <ContenedorProductos>
        {products.map(({ id, image, title, price, rating }) => {
          return (
            <CardProduct
              key={id}
              cta={() => {}}
              image={image}
              title={title}
              price={price}
              rating={rating}
            />
          );
        })}
      </ContenedorProductos>

      <TitleText tittle="dasfasdf" />
    </div>
  );
};

const ContenedorProductos = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: 20,
  margin: 30,
});

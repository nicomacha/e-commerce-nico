import { styled } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface CardProduct {
  title: string;
  image: string;
  cta: () => void;
  rating: number;
  price: number;
}

export const CardProduct = ({
  title,
  image,
  cta,
  rating,
  price,
}: CardProduct) => {
  return (
    <CardStyled>
      <CardActionArea>
        <CardMedia component='img' height='298' image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' fontSize={20}>
            {title}
          </Typography>
          <Typography gutterBottom variant='h5' component='div' fontSize={20}>
            ${price}
          </Typography>
          <Rating name='read-only' value={rating} readOnly />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          color='primary'
          endIcon={<AddShoppingCartIcon />}
          fullWidth
          onClick={cta}
        >
          AGREGAR AL CARRITO
        </Button>
      </CardActions>
    </CardStyled>
  );
};

const CardStyled = styled(Card)({
  width: 295,
});

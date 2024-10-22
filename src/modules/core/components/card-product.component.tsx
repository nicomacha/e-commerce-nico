import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Rating, styled } from "@mui/material";
import dorsalMaradona from "../../assets/dorsal.maradona.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export const CardProduct = () => {
  return (
    <CardStyled>
      <CardActionArea>
        <CardMedia
          component="img"
          height="298"
          image={dorsalMaradona}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontSize={20}>
            T-SHIRT WITH TAPE DETAILS
          </Typography>
          <Rating name="read-only" value={5} readOnly />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          endIcon={<AddShoppingCartIcon />}
          fullWidth
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

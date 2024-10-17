import { useState } from "react";
import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
interface BarTop {
  text: string;
}

export const BarTop = ({ text }: BarTop) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <Container>
      {text} <Icon onClick={() => setIsOpen(false)} />
    </Container>
  );
};

//Poner estilos del icono en un componente custom

const Container = styled("div")({
  backgroundColor: "black",
  color: "white",
  height: 38,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Icon = styled(CloseIcon)({
  marginLeft: 20,
  cursor: "pointer",
});

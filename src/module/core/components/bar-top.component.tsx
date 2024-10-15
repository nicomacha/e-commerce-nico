import { styled } from "@mui/material";
interface BarTop {text:string}
export const BarTop = ({text}:BarTop) => {
    
  return <Container>{text}</Container>;
};

const Container = styled("div")({
  backgroundColor: "black",
  color: "white",
  height: 38, 
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

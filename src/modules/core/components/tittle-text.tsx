import styled from "styled-components";
interface TittleText {
  tittle: string;
}
export const TittleText = ({ tittle }: TittleText) => {
  return <TextPrinc>{tittle}</TextPrinc>;
};

const TextPrinc = styled("h2")({
  display: "flex",
  justifyContent: "center",
});

import { styled } from '@mui/material';
interface TitleText {
  tittle: string;
}
export const TitleText = ({ tittle }: TitleText) => {
  return <Text>{tittle}</Text>;
};

const Text = styled('h2')({
  display: 'flex',
  justifyContent: 'center',
});

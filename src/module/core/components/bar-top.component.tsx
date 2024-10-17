import { useState } from 'react';
import { styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
interface BarTop {
  text: string;
}

export const BarTop = ({ text }: BarTop) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <Container>
      {text}{' '}
      <CloseIcon
        onClick={() => setIsOpen(false)}
        style={{
          marginLeft: 20,
          cursor: 'pointer',
        }}
      />
    </Container>
  );
};

//Poner estilos del icono en un componente custom

const Container = styled('div')({
  backgroundColor: 'black',
  color: 'white',
  height: 38,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

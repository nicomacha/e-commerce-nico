import { styled } from '@mui/material';

export const Nav = () => {
  return (
    <nav>
      <Ul>
        <li>Novedades</li>
        <li>Categorias</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </Ul>
    </nav>
  );
};

const Ul = styled('ul')({
  display: 'flex',
  listStyle: 'none',
  gap: 16,
});

import { styled } from '@mui/material';

//CREAR UN ARRAY CON EL LISTADO DE ITEMS
//[{id:1,label:"Novedades",path:'/novedades'}]

export const Nav = () => {
  return (
    <nav>
      <Ul>
        {/* MAPEAR LOS ELEMENTOS DEL ARRAY */}
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

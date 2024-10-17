import { styled } from '@mui/material';
import { Logo } from './logo.component';
import { Nav } from './nav.component';
import { Search } from './search.component';

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <Search />
        <span>cart</span>
        <span>user</span>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled('header')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 16,
});

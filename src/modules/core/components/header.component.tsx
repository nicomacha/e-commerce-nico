import { styled } from "@mui/material";
import { Logo } from "./logo.component";
import { Nav } from "./nav.component";
import { Search } from "./search.component";
import { CartIcon } from "./icons/cart-icon.component";
import { UserIcon } from "./icons/user-icon.component";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav />
      <WrapperSearch>
        <Search />
        <CartIcon />
        <UserIcon />
      </WrapperSearch>
    </HeaderContainer>
  );
};

const HeaderContainer = styled("header")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 16,
});

const WrapperSearch = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

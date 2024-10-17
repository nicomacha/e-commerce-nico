import { Logo } from "./logo.component";
import { Nav } from "./nav.component";
import { Search } from "./search.component";

export const Header = () => {
  return (
    <header>
      <Logo />
      <Nav />
      <Search />
    </header>
  );
};

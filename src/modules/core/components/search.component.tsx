import { InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIconStyled />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder='Buscá tu producto....'
        inputProps={{ 'aria-label': 'search' }}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20,
  backgroundColor: '#f0f0f0',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '22ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));

const SearchIconStyled = styled(SearchIcon)({
  color: '#807f7f',
});

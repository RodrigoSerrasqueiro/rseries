import SearchBar from "../SearchBar/searchBar";
import { HeaderContainer, Logo} from "./style";

function Header() {
  return (
    <HeaderContainer>
      <Logo to="/rseries">RSéries</Logo>
      <SearchBar />
    </HeaderContainer>
  )
}
export default Header;
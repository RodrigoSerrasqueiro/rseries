import SearchBar from "../SearchBar/searchBar";
import { HeaderContainer} from "./style";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <NavLink className="logo" to="/rseries">RSéries</NavLink>
      <SearchBar />
    </HeaderContainer>
  )
}
export default Header;
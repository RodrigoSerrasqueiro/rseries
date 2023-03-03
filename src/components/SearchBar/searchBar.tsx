import { Input, Loupe, SearchBarContainer } from "./style";
import { useSearch } from "../../pages/context/context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {

  const { searchTerm, setSearchTerm } = useSearch();
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchTerm(inputValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSearchValue(event.target.value);
    navigate("./busca");
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchBarContainer>
        <Input
          type="text"
          name="query"
          id="searchBar-Input"
          placeholder="Qual sua série favorita?"
          value={inputValue} 
          onChange={handleInputChange}
        />
        <Loupe type="submit"/>
      </SearchBarContainer>
    </form>
  );
}

export default SearchBar;
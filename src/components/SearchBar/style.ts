import styled from "styled-components";
import loupe from 'C:/Users/Rodrigo/Desktop/Projects/reactJS/rseriesType/src/assets/loupe.png'

export const SearchBarContainer = styled.div`
  width: 400px;
  height: 30px;
  background-color: #fff;
  border-radius: 8px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  @media(max-width: 768px){
    width: 250px;
    margin-left: 15px;
  }
  @media(max-width: 380px){
    width: 200px;
    margin-left: 15px;
  }
`
export const Loupe = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: .5s;
  background-color: #fff;
  background-image: url(${loupe});
  background-size: cover;
  background-position-x: 2px;
  background-position-y: 2px;

  &:hover{
    transform: scale(0.9);
  }
`
export const Input = styled.input`
  height: 30px;
  width: 90%;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
`
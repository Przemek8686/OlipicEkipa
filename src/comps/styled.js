import styled from "styled-components";
import logoImage from "../logo.jpeg"; // Zmień ścieżkę do swojego obrazu

export const Logo = styled.div`
  width: 100px;
  height: 100px;
  margin:auto;
  margin-top:40px;// Wyśrodkowanie logo na osi poziomej
  border-radius:10%; // Zaokrąglenie logo
  background-image: url(${logoImage});
  background-size: cover; // Dostosuj do potrzeb
  // Możesz również dodać inne właściwości tła, takie jak repeat, position itp.
  transform: scale(1.5); // Powiększenie logo o 20%
  border:5px solid #064781;
  box-shadow: 1px 5px 10px  #186cb5 ;
`;

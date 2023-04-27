import { Nav, NavButton } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Nav>
      <NavButton to="/">Home</NavButton>
      <NavButton to="/tweets">Tweets</NavButton>
    </Nav>
  );
};

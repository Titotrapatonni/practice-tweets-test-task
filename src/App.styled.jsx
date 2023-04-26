import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavButton = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin: 20px;
  gap: 6px;
  width: 196px;
  color: black;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
`;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackButton = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  color: black;
  width: 196px;
  text-decoration: none;
`;

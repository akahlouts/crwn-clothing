import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 39px;
  width: 50px;
  margin: 19.5px 0;

  @media (max-width: 768px) {
    width: 50px;
    margin: 6px 0;
  }
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 9.75px;
`;

export const NavLink = styled(Link)`
  margin: 0 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.7);
  }
`;

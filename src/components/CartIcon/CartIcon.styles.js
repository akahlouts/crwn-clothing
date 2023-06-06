import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 100%;
  height: 100%;
`;

export const CartIconContainer = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 15px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.7);
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 2px;
  user-select: none;
`;

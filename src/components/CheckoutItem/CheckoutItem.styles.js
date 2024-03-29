import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media (max-width: 992px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Name = styled.span`
  width: 23%;

  @media (max-width: 992px) {
    width: 22%;
  }
`;

export const Quantity = styled.span`
  width: 23%;
  display: flex;
`;

export const Price = styled.span`
  width: 23%;

  @media (max-width: 992px) {
    width: 22%;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
  user-select: none;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

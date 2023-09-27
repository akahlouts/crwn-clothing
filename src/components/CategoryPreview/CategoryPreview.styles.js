import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Title = styled(Link)`
  font-size: 38px;
  font-weight: bold;
  margin: 31.54px auto 25px;
  cursor: pointer;
  transition: 0.3s;
  width: fit-content;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.7);
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px 15px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;

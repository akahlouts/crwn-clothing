import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 15px;
  row-gap: 25px;
`;

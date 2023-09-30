import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryTitle = styled.h2`
  font-size: 50px;
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 42px;
  }
`;

export const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px 15px;

    & > div {
      margin-bottom: 0;
    }
  }

  @media (max-width: 576px) {
    width: 90%;
    grid-template-columns: 1fr;
  }
`;

import styled from "styled-components";

export const SigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;

  h2 {
    margin: 10px 0;
  }

  @media (max-width: 576px) {
    width: 300px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 576px) {
    justify-content: center;

    > *:first-child {
      margin-right: 5px;
    }
  }
`;

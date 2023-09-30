import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;

  h2 {
    margin: 10px 0;
  }

  @media (max-width: 576px) {
    width: 300px;

    & form button {
      margin-inline: auto;
    }
  }
`;

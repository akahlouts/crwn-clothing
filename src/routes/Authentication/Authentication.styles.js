import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;

  @media (max-width: 992px) {
    flex-direction: column;
    width: unset;
    align-items: center;

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

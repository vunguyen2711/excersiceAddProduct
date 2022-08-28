import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 4rem;
  background-color: #002b5b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  .header__button {
    font-size: 2.4rem;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const HeaderLogo = styled.span`
  width: fit-content;
  font-size: 4.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
  .header__logo {
    font-size: 4.8rem;
    font-weight: 600;
    color: white;
  }
`;

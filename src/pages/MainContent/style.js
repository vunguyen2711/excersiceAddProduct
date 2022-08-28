import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;
export const MainForm = styled.div`
  width: 50%;
  height: max-content;
  padding: 2rem;
  font-size: 1.6rem;
  border: 1px solid #000;
  .form__checkbox {
    font-size: 2rem;
  }
  .form__button {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button__container {
    display: flex;
  }
`;
export const MainShowCase = styled.div`
  font-size: 1.6rem;
  width: 100%;
  padding: 2rem;
`;

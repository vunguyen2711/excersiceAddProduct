import styled, { css } from "styled-components";

export const SideBarContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  padding: 2rem 2rem;
  background-color: #8fe3cf;
  transition: all 0.3s;
  transform: translateX(300px);
  ${(props) =>
    props.isShowSide &&
    css`
      transform: translateX(0);
    `}
  .button__closesidebar {
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }
  .button__showicon {
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 100%;
  }
  .title__sidebar {
    color: #2b4865;
  }
`;
export const SideBarOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: ${(props) => (props.isShowSide ? "flex" : "none")};
`;

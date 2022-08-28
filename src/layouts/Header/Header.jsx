import React from "react";
import { SwapOutlined } from "@ant-design/icons";
import { Button } from "antd";
import * as S from "./style";
const Header = ({ setIsShowSide }) => {
  return (
    <S.HeaderContainer>
      <S.HeaderLogo>
        <SwapOutlined className="header__logo" />
        ADDPRODUCT
      </S.HeaderLogo>
      <Button
        onClick={setIsShowSide}
        size="large"
        type="default"
        className="header__button"
      >
        Show SideBar
      </Button>
    </S.HeaderContainer>
  );
};

export default Header;

import React from "react";
import * as S from "./style";
import { Button, Typography, Space } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
const { Title } = Typography;
const SideBarOnRight = ({ isShowSide, setIsShowSide }) => {
  return (
    <>
      <S.SideBarContainer isShowSide={isShowSide}>
        <Button onClick={setIsShowSide} className="button__closesidebar">
          X
        </Button>
        <br />
        <Title className="title__sidebar" level={3}>
          Designer information
        </Title>
        <Title level={4}>Contact here:</Title>
        <Space>
          <Button
            className="button__showicon"
            href="https://www.facebook.com/vu.nguyen.2711"
          >
            <FacebookOutlined className="icon" />
          </Button>
          <Button
            className="button__showicon"
            href="https://github.com/vunguyen2711"
          >
            <GithubOutlined className="icon" />
          </Button>
          <Button
            className="button__showicon"
            href="https://www.instagram.com/"
          >
            <InstagramOutlined className="icon" />
          </Button>
        </Space>
      </S.SideBarContainer>
      <S.SideBarOverlay
        onClick={setIsShowSide}
        isShowSide={isShowSide}
      ></S.SideBarOverlay>
    </>
  );
};

export default SideBarOnRight;

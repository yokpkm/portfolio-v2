import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Button, Col, Row } from "antd";
import { MoonFilled } from "@ant-design/icons";
import { PropsTheme } from "@/theme";
import { ThemeType } from "../../../utils/constants";
import { TextMenu } from "@/components/text";
import { StyledSwitch } from "@/components/switch";

interface Props {
  theme: ThemeType;
  themeToggle: () => void;
}

export const NavbarDesktop: React.FC<Props> = ({ theme, themeToggle }) => {
  return (
    <WrapperNavbar>
      <Row justify="center" align="middle">
        <Col flex="auto">
          <Button
            icon={
              theme === ThemeType.LIGHT ? (
                <Image
                  width={40}
                  height={40}
                  src="/logo/logo-lightTheme.svg"
                  alt="false"
                />
              ) : (
                <Image
                  width={40}
                  height={40}
                  src="/logo/logo-darkTheme.svg"
                  alt="false"
                />
              )
            }
            type="link"
          />
        </Col>
        <Col>
          <Row gutter={[40, 0]} align="middle">
            <Col>
              <TextMenu>Work</TextMenu>
            </Col>
            <Col>
              <TextMenu>About</TextMenu>
            </Col>
            <Col>
              <TextMenu>Contact</TextMenu>
            </Col>
            <Col>
              <StyledSwitch
                onClick={() => themeToggle()}
                checkedChildren={<MoonFilled />}
                unCheckedChildren={<MoonFilled />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </WrapperNavbar>
  );
};

const WrapperNavbar = styled.div<PropsTheme>`
  padding: 12px 80px 12px 80px;
  background-color: ${(props) => props.theme.backgroundColors.default};
  z-index: 10;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

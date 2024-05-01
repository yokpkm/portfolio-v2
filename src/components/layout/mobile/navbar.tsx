import React, { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import Image from "next/image";
import { Button, Col, Row } from "antd";
import {
  MoonFilled,
  MailFilled,
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
} from "@ant-design/icons";
import { ThemeType } from "@/utils/constants";
import { LightTheme, DarkTheme, PropsTheme } from "@/theme";
import { TextMenu } from "@/components/text";
import { ButtonIcon } from "@/components/button";
import { StyledSwitch } from "@/components/switch";
import { StyledDrawer } from "@/components/drawer";

interface Props {
  themeToggle: () => void;
  theme: ThemeType;
}

export const NavbarMobile: React.FC<Props> = ({ themeToggle, theme }) => {
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <WrapperNavbar>
        <Row gutter={[8, 0]} justify="center" align="middle">
          <Col flex="auto">
            <Button
              icon={
                theme === ThemeType.LIGHT ? (
                  <Image
                    width={36}
                    height={36}
                    src="/logo/logo-lightTheme.svg"
                    alt="false"
                  />
                ) : (
                  <Image
                    width={36}
                    height={36}
                    src="/logo/logo-darkTheme.svg"
                    alt="false"
                  />
                )
              }
              type="link"
            />
          </Col>
          <Col>
            <StyledSwitch
              onClick={() => themeToggle()}
              checkedChildren={<MoonFilled />}
              unCheckedChildren={<MoonFilled />}
            />
          </Col>
          <Col>
            <Button
              icon={
                theme === ThemeType.LIGHT ? (
                  <Image
                    width={24}
                    height={24}
                    src="/icons/ic-menu-lightTheme.svg"
                    alt="false"
                  />
                ) : (
                  <Image
                    width={24}
                    height={24}
                    src="/icons/ic-menu-darkTheme.svg"
                    alt="false"
                  />
                )
              }
              type="link"
              onClick={() => setShowMenu(true)}
              style={{ color: themeContext.logo.default }}
            />
          </Col>
        </Row>
      </WrapperNavbar>
      <StyledDrawer
        placement="top"
        height="auto"
        open={showMenu}
        closable={false}
        onClose={() => setShowMenu(false)}
      >
        <Row justify="center" style={{ marginBottom: 32 }}>
          <TextMenu>Work</TextMenu>
        </Row>
        <Row justify="center" style={{ marginBottom: 32 }}>
          <TextMenu>About</TextMenu>
        </Row>
        <Row justify="center" style={{ marginBottom: 16 }}>
          <TextMenu>Contact:</TextMenu>
        </Row>
        <Row justify="center" gutter={16} align="middle">
          <Col>
            <a
              target={"_blank"}
              href={"mailto:premkamon.work@gmail.com"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <MailFilled />
              </ButtonIcon>
            </a>
          </Col>
          <Col>
            <a
              target={"_blank"}
              href={"https://www.linkedin.com/in/yokpkm"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <LinkedinFilled />
              </ButtonIcon>
            </a>
          </Col>
          <Col>
            <a
              target={"_blank"}
              href={"https://github.com/yokpkm"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <GithubFilled />
              </ButtonIcon>
            </a>
          </Col>
          <Col>
            <a
              target={"_blank"}
              href={"https://www.instagram.com/yokxpkm"}
              rel="noreferrer"
            >
              <ButtonIcon type="link">
                <InstagramFilled />
              </ButtonIcon>
            </a>
          </Col>
        </Row>
      </StyledDrawer>
    </>
  );
};

const WrapperNavbar = styled.div<PropsTheme>`
  padding: 12px 16px 12px 16px;
  background-color: ${(props) => props.theme.backgroundColors.default};
  z-index: 10;
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  /* width: 100%; */
`;

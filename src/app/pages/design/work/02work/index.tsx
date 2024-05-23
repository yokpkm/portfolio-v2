import { DarkTheme, LightTheme } from "@/theme";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Card, Col, Row, Tag } from "antd";
import { ButtonPrimary } from "@/components/button";
import { TextContent, TextTitle } from "@/components/text";
import { TestModal02 } from "./components";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const TestCard02: React.FC<Props> = ({ visible, setVisible }) => {
  const themeContext = useContext(ThemeContext) as LightTheme | DarkTheme;

  return (
    <>
      <TestModal02 visible={visible} setVisible={setVisible} />
      <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
        <Card
          cover={<img src="/images/img.jpg" />}

          // variant="flat"
          // css={{
          //   background: themeContext.backgroundColors.card,
          //   shadow: themeContext.cardShadow.default,
          //   borderRadius: 16,
          // }}
        >
          {/* <Card.Image src="/image/card/imgCard01.jpg" /> */}
          {/* <Card.Body css={{ p: "28px 24px" }}> */}

          <Row>
            <TextTitle>Progress Tracking Web App</TextTitle>
          </Row>
          <Row style={{ marginTop: 2 }}>
            <TextContent>Web app for tracking progress of project.</TextContent>
          </Row>
          <Row gutter={[8, 16]} align="middle" style={{ marginTop: 32 }}>
            <Col flex="auto">
              <Tag>UI Design</Tag>
            </Col>
            <Col>
              <ButtonPrimary onClick={() => setVisible(true)}>
                Read more
              </ButtonPrimary>
            </Col>
          </Row>
          {/* </Card.Body> */}
        </Card>
      </Col>
    </>
  );
};

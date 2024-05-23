import React from "react";
import { Col, Row, Tag } from "antd";
import { ButtonMore, ButtonPrimary } from "@/components/button";
import { TextContent, TextTitle } from "@/components/text";
import { TestModal01 } from "./components";
import { StyledCard } from "@/components/card";
import { StyledTagDesign } from "@/components/tag";

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const TestCard01: React.FC<Props> = ({ visible, setVisible }) => {
  return (
    <>
      <TestModal01 visible={visible} setVisible={setVisible} />
      <Col xs={22} sm={22} md={12} lg={12} xl={12} xxl={12}>
        <StyledCard
          cover={<img src="/images/img.jpg" />}
          style={{ borderRadius: 0 }}
        >
          <Row>
            <TextTitle>Progress Tracking Web App</TextTitle>
          </Row>
          <Row style={{ marginTop: 2 }}>
            <TextContent>Web app for tracking progress of project.</TextContent>
          </Row>
          <Row gutter={[8, 16]} align="middle" style={{ marginTop: 32 }}>
            <Col flex="auto">
              <StyledTagDesign>UI Design</StyledTagDesign>
            </Col>
            <Col>
              <ButtonMore onClick={() => setVisible(true)}>
                Read more
              </ButtonMore>
            </Col>
          </Row>
        </StyledCard>
      </Col>
    </>
  );
};

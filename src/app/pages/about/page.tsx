import React from "react";
import { Col, Grid, Row } from "antd";
// import { ButtonPrimary, ButtonSecondary } from "../components/Button";
// import { DividerSection } from "../components/Divider";
import { TextBody, TextDescription, TextHeader } from "@/components/text";
import {
  ButtonIcon,
  ButtonPrimary,
  ButtonSecondary,
} from "@/components/button";
import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
} from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const AboutPage = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  return (
    <>
      <section id="about">
        <Row justify="center">
          <Col span={24}>
            <Row
              justify="start"
              style={
                (xs || sm || md) && !lg
                  ? { marginTop: 0, marginBottom: 48 }
                  : { marginTop: 0, marginBottom: 48 }
              }
            >
              {/* <DividerSection orientation="left"></DividerSection> */}
              <TextHeader>ABOUT</TextHeader>

              {/* <TextDescription>
                Hello! I'm Yok Premkamon, a UX/UI Designer.
              </TextDescription> */}
            </Row>

            <Row justify="start">
              <TextBody>
                I work as a UX/UI Designer. My goal is to design useful products
                for users.
              </TextBody>
            </Row>
            <Row justify="start" style={{ marginTop: 6 }}>
              <TextBody>
                I've experience in front-end development on website and mobile
                application.
              </TextBody>
            </Row>
            <Row justify="start" style={{ marginTop: 6 }}>
              <TextBody>
                So, I'd like to improve my skills for provide a good user
                experience.
              </TextBody>
            </Row>

            {xs || !sm ? (
              <>
                <Row justify="start" gutter={[16, 8]} style={{ marginTop: 40 }}>
                  <Col xs={12}>
                    <TextDescription>
                      <li>Figma</li>
                    </TextDescription>
                  </Col>
                  <Col xs={12}>
                    <TextDescription>
                      <li>Adobe XD</li>
                    </TextDescription>
                  </Col>
                  <Col xs={12}>
                    <TextDescription>
                      <li>Styled Components</li>
                    </TextDescription>
                  </Col>
                  <Col xs={12}>
                    <TextDescription>
                      <li>React Typescript</li>
                    </TextDescription>
                  </Col>
                  <Col xs={12}>
                    <TextDescription>
                      <li>React Native</li>
                    </TextDescription>
                  </Col>
                  <Col xs={12}>
                    <TextDescription>
                      <li>MongoDB</li>
                    </TextDescription>
                  </Col>
                </Row>
              </>
            ) : (
              <>
                <Row justify="start" gutter={16} style={{ marginTop: 40 }}>
                  <Col sm={8} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>Figma</li>
                    </TextDescription>
                  </Col>
                  <Col sm={8} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>Adobe XD</li>
                    </TextDescription>
                  </Col>
                  <Col sm={8} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>Styled Components</li>
                    </TextDescription>
                  </Col>
                </Row>
                <Row justify="start" gutter={16} style={{ marginTop: 8 }}>
                  <Col sm={8} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>React Typescript</li>
                    </TextDescription>
                  </Col>
                  <Col sm={8} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>React Native</li>
                    </TextDescription>
                  </Col>
                  <Col sm={8} md={6} lg={6} xl={5} xxl={4}>
                    <TextDescription>
                      <li>MongoDB</li>
                    </TextDescription>
                  </Col>
                </Row>
              </>
            )}

            <Row gutter={[16, 16]} justify="start" style={{ marginTop: 48 }}>
              <Col>
                {/* <ButtonPrimary href="/PremkamonResume.pdf" target="_blank"> */}
                <ButtonPrimary type="primary">View my resume</ButtonPrimary>
              </Col>
              <Col>
                <ButtonSecondary type="primary">Get in touch</ButtonSecondary>
              </Col>

              <Col>
                <a target={"_blank"} href={""} rel="noreferrer">
                  <ButtonIcon type="link">
                    <MailFilled />
                  </ButtonIcon>
                </a>
              </Col>
              <Col>
                <a target={"_blank"} href={""} rel="noreferrer">
                  <ButtonIcon type="link">
                    <LinkedinFilled />
                  </ButtonIcon>
                </a>
              </Col>
              <Col>
                <a target={"_blank"} href={""} rel="noreferrer">
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
          </Col>
        </Row>
      </section>
    </>
  );
};

export default AboutPage;

import { TextHeader } from "@/components/text";
import { Grid, Row } from "antd";
import React, { useState } from "react";
import { TestCard01 } from "./work/01work";
import { TestCard02 } from "./work/02work";

const DesignPage = () => {
  const { useBreakpoint } = Grid;
  const { xs, sm, md, lg } = useBreakpoint();

  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <>
      <TextHeader>Design</TextHeader>
      <Row
        justify="center"
        gutter={(xs || sm || md) && !lg ? [32, 32] : [40, 40]}
      >
        <TestCard01 visible={visibleModal} setVisible={setVisibleModal} />
      </Row>
    </>
  );
};

export default DesignPage;

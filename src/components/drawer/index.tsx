import styled from "styled-components";
import { Drawer } from "antd";

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-content {
    background-color: ${(props) => props.theme.backgroundColors.default};
  }

  .ant-drawer-content-wrapper {
    height: fit-content !important;
  }

  .ant-drawer-body {
    padding: 32px;
  }
`;

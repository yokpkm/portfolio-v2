import { Drawer } from "antd";
import styled from "styled-components";

export const StyledDrawer = styled(Drawer)`
  background-color: ${(props) =>
    props.theme.backgroundColors.default} !important;
`;

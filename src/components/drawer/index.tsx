import styled from "styled-components";
import { Drawer } from "antd";

export const StyledDrawer = styled(Drawer)`
  background-color: ${(props) =>
    props.theme.backgroundColors.default} !important;
`;

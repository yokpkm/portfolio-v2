import styled from "styled-components";
import { Button } from "antd";

export const ButtonIcon = styled(Button)`
  color: ${(props) => props.theme.fontColor.default};

  &&.ant-btn {
    padding: 0;
  }

  svg {
    width: 24px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }

  :hover,
  :focus,
  :active {
    color: ${(props) => props.theme.fontColor.link};
  }
`;

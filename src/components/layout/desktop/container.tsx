import React from "react";
import styled from "styled-components";

interface Props {
  children: any;
}

export const ContainerDesktop: React.FC<Props> = ({ children }) => {
  return (
    <>
      <WrapperContainer>
        <StyledContainer>{children}</StyledContainer>
      </WrapperContainer>
    </>
  );
};

const WrapperContainer = styled.div`
  margin-left: calc(20% - 12px);
  margin-right: calc(20% - 12px);
`;

const StyledContainer = styled.div`
  margin: 160px auto;
  max-width: 1920px;
  /* min-width: 240px; */
`;

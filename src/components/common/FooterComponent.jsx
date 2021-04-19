import React from "react";
import styled from "styled-components";
import colors from "../../css_variables/colors";
const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  padding-left: 5rem;
  @media (max-width: 800px) {
    padding-left: 1rem;
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 20rem;
  margin-bottom: 2rem;
`;
const StyledText = styled.h3`
  color: rgb(241, 207, 168);
  font-style: italic;
`;
const StyledText2 = styled.h4`
  color: rgb(206, 162, 111);
  font-style: italic;
  margin-bottom: -1rem;
  font-weight: 400;
`;
const FooterComponent = () => {
  return (
    <StyledContainer>
      <TextContainer>
        <StyledText>Fon massasje og fotpleie</StyledText>
        <StyledText2>Kvesetvegen 16</StyledText2>
        <StyledText2>2266 Arneberg</StyledText2>
        <StyledText2>Tel: 94801583</StyledText2>
      </TextContainer>
      <TextContainer>
        <StyledText>Åpningstider</StyledText>
        <StyledText2>man-fre: 11:00 - 20:00</StyledText2>
        <StyledText2>Lørdag: 10:00 - 20:00</StyledText2>
        <StyledText2>Søndag: stengt</StyledText2>
      </TextContainer>
    </StyledContainer>
  );
};

export default FooterComponent;

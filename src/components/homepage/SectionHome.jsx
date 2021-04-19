import React from "react";
import styled from "styled-components";
import FooterComponent from "../common/FooterComponent";

const StyledContainer = styled.div`
  grid-column: 7/ -1;
  grid-row: 6/12;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0 10rem;
  @media (max-width: 1180px) {
    grid-column: 1/ 12;
    grid-row: 14/16;
    padding: 0 5rem;
  }
  @media (max-width: 1000px) {
    grid-column: 1/-1;
  }
  @media (max-width: 800px) {
    grid-column: 1/-1;
    grid-row: 5/-1;
    margin-top: 6rem;
    padding: 0 1rem;
  }
`;
const FooterContainer = styled.div`
  grid-row: 13/16;
  grid-column: 1/-1;
  @media (max-width: 1930px) {
    grid-row: 13/16;
  }
  @media (max-width: 1180px) {
    grid-row: 18/19;
    grid-column: 2/-1;
  }
  @media (max-width: 800px) {
    grid-row: 14/18;
    grid-column: 1/-1;
  }
`;

const SectionHome = () => {
  return (
    <>
      <StyledContainer>
        <h1 style={{ color: "rgb(241, 207, 168)" }}>Massasje og fotpleie</h1>
        <p
          style={{
            color: "rgb(241, 207, 168)",
            fontStyle: "italic",
            fontSize: "1rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iusto
          omnis at dignissimos odit temporibus quos itaque perferendis ab atque
          voluptatum ipsa, iste nemo amet iure eveniet commodi, beatae incidunt.
          Dicta odio alias omnis facere nisi architecto, dolorem dolorum soluta
          facilis quia. Delectus eum ad voluptas! At odit consectetur vero nulla
          dolores dolorum error neque libero reiciendis, harum necessitatibus
          expedita! Consequuntur quis necessitatibus voluptas nostrum quidem,
          porro id nisi sequi in sed, dolor eum incidunt. Possimus ab deserunt
        </p>
      </StyledContainer>
      <FooterContainer>
        <FooterComponent />
      </FooterContainer>
    </>
  );
};

export default SectionHome;

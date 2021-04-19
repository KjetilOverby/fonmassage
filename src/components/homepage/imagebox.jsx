import React from "react";

import styled from "styled-components";

const StyledContainer = styled.div`
  grid-column: 1/ 7;
  grid-row: 6/12;
  display: grid;
  grid-template-columns: repeat(12, minmax(3.5rem, 1fr));
  grid-template-rows: repeat(12, minmax(3rem, 3rem));

  @media (max-width: 1180px) {
    grid-column: 1/ 11;
  }
  @media (max-width: 800px) {
    grid-row: 3/ 6;
  }
`;

const Img1 = styled.img`
  width: 100%;
  filter: blur(5px);
  grid-column: 2/12;
  grid-row: 1/11;
  @media (max-width: 800px) {
    grid-column: 2/ 10;
  }
  @media (max-width: 700px) {
    grid-column: 2/ 8;
  }
  @media (max-width: 600px) {
    grid-column: 2/ 7;
  }
`;
const Img2 = styled.img`
  width: 100%;
  grid-column: 5/10;
  grid-row: 2/7;
  z-index: 10;
  @media (max-width: 800px) {
    grid-column: 4/ 8;
    transform: rotate(-10deg);
  }
  @media (max-width: 700px) {
    grid-column: 2/ 8;
  }
  @media (max-width: 600px) {
    grid-column: 2/ 7;
  }
`;
const Img3 = styled.img`
  width: 100%;
  grid-column: 8/13;
  grid-row: 6/8;
  z-index: 10;
  @media (max-width: 800px) {
    grid-column: 5/ 10;

    grid-row: 5/7;
    transform: rotate(10deg);
  }
  @media (max-width: 700px) {
    grid-column: 3/ 9;
  }
  @media (max-width: 600px) {
    grid-column: 2/ 7;
  }
`;

const imagebox = () => {
  return (
    <StyledContainer>
      <Img1
        src="https://images.unsplash.com/photo-1583416750470-965b2707b355?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
      <Img2
        src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
      <Img3
        src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </StyledContainer>
  );
};

export default imagebox;

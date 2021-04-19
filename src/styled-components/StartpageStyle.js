import styled from "styled-components";

const StartpageStyle = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
    url("https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: calc(100% - 0px) calc(100% - 0px);
  display: grid;
  grid-template-columns: repeat(12, minmax(10px, auto));
  grid-template-rows: repeat(20, minmax(2rem, auto));
  @media (min-width: 2000px) {
    grid-template-rows: repeat(14, minmax(7rem, 8rem));
  }
`;

export default StartpageStyle;

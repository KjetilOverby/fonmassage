import React from "react";
import Background from "../../styled-components/StartpageStyle";
import HeaderComponent from "../common/HeaderComponent";
import Imagebox from "./imagebox";
import SectionHome from "./SectionHome";
const StartPage = () => {
  return (
    <Background>
      <HeaderComponent />
      <h1 className="header-start-page">Fon massasje og fotpleie</h1>
      <Imagebox />
      <SectionHome />
    </Background>
  );
};

export default StartPage;

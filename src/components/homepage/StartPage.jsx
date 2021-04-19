import React from "react";
import BackgroundComponent from "../common/BackgroundComponent";
import HeaderComponent from "../common/HeaderComponent";
import Imagebox from "./imagebox";
import SectionHome from "./SectionHome";
const StartPage = () => {
  return (
    <BackgroundComponent
      image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      imagemobile="https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    >
      <HeaderComponent />
      <h1 className="header-start-page">Fon massasje og fotpleie</h1>
      <Imagebox />
      <SectionHome />
    </BackgroundComponent>
  );
};

export default StartPage;

// https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80

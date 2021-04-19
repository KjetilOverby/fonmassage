import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const BackgroundComponent = ({ children, image, imagemobile }) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      minHeight: "100vh",
      width: "100vw",
      background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
        url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "calc(100% - 0px) calc(100% - 0px)",
      display: "grid",
      gridTemplateColumns: `repeat(12, minmax(10px, auto))`,
      gridTemplateRows: "repeat(20, minmax(2rem, auto))",
      // [theme.breakpoints.down("lg")]: {
      //   gridTemplateRows: "repeat(14, minmax(7rem, 8rem))",
      // },
      [theme.breakpoints.down("xs")]: {
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
        url(${imagemobile})`,

        backgroundAttachment: "fixed",
      },
    },
  }));

  const classes = useStyles();
  // const StyledBackground = styled.div`
  //   min-height: 100vh;
  //   width: 100vw;
  //   background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
  //     url(${image});
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-attachment: fixed;
  //   background-position: calc(100% - 0px) calc(100% - 0px);
  //   display: grid;
  //   grid-template-columns: repeat(12, minmax(10px, auto));
  //   grid-template-rows: repeat(20, minmax(2rem, auto));
  //   @media (min-width: 2000px) {
  //     grid-template-rows: repeat(14, minmax(7rem, 8rem));
  //   }
  //   @media (max-width: 800px) {
  //     background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)),
  //       url(${imagemobile});
  //     background-repeat: no-repeat;
  //     background-size: cover;
  //     background-attachment: fixed;
  //     background-position: calc(100% - 0px) calc(100% - 0px);
  //     display: grid;
  //     grid-template-columns: repeat(12, minmax(10px, auto));
  //     grid-template-rows: repeat(20, minmax(2rem, auto));
  //   }
  // `;
  return <div className={classes.container}>{children}</div>;
};

export default BackgroundComponent;

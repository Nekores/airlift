import cover from "../../assets/cover1.png";

export const styleSheet = (theme) => ({
  root: {
    backgroundImage: `url(${cover})`,
    height: "100vh",
    backgroundSize: "cover",
    position: "relative",
    textAlign: "center",
    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",

    overflow: "hidden",
    "& h2": {
      color: "white",
      fontSize: "40px",
      fontWeight: "635",
      letterSpacing: "0",
      lineHeight: "48px",
      position: "relative",
      [theme.breakpoints.down(635)]: {
        fontSize: "20px",
        lineHeight: "33px",
      },
    },
    "& .overlay": {
      backgroundColor: "#2356d438",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      "& .circular-cursor": {
        cursor: "pointer",
        position: "absolute",
        left: "80%",
        top: "60%",
        transition: "0.2s all ease-in-out",
        [theme.breakpoints.down(635)]: {
          top: "70%",
          left: 0,
          right: 0,
        },
      },
    },
  },
});

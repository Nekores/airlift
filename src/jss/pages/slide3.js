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
      fontSize: "56px",
      fontWeight: "500",
      letterSpacing: "-0.4",
      lineHeight: "72px",
      position: "relative",
    },
    "& .overlay": {
      backgroundColor: "#2356d438",
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    "& .avatar": {
      [theme.breakpoints.down(767)]: {
        height: "200px",
      },
    },
  },
  bottomPart: {
    position: "absolute",
    bottom: "10%",
    left: 0,
    right: 0,
    margin: "auto",
    "& p": {
      color: "white",
      fontSize: "16px",
      lineHeight: "24px",
      textAlign: "center",
    },
  },
});

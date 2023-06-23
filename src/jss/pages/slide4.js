export const styleSheet = () => ({
  root: {
    backgroundColor: "#F4EBD7",
    height: "100vh",
    overflow: "hidden",
    "& h2": {
      textAlign: "center",
      color: "#014235",
      fontSize: "32px",
      lineHeight: "48px",
      letterSpacing: "-0.15px",
    },
    "& .overlay": {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    "& .slideshow": {
      margin: "0 auto",
      overflow: "hidden",
      maxWidth: "500px",
    },

    "& .slideshowSlider": {
      whiteSpace: "nowrap",
      transition: "ease 1000ms",
    },

    "& .slide": {
      display: "inline-block",
      //   height: "400px",
      width: "100%",
      borderRadius: "40px",
      "& img": {
        // width: "100%",
      },
    },
    "& .contentArea": {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    "& .slideNum": {
      position: "absolute",
      top: "-30px",
    },
  },
});

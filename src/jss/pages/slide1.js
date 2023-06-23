import avatar2 from "../../assets/avatar2.png";

export const styleSheet = (theme) => ({
  root: {
    backgroundImage: `url(${avatar2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right",
    padding: "90px 0px",
    backgroundSize: "contain",
    [theme.breakpoints.down(767)]: {
      backgroundImage: "none",
    },
  },
});

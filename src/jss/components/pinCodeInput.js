export const styleSheet = (theme) => ({
  root: {
    "& .pinInput": {
      width: "35px",
      border: "none",
      height: "48px",
      padding: "24px",
      fontSize: "50px",
      textAlign: "center",
      marginRight: "30px",
      borderRadius: "8px",
      marginBottom: "30px",
      backgroundColor: "#F4F5F6",
      [theme.breakpoints.down(767)]: {
        width: "16px",
        height: "34px",
        fontSize: "30px",
        marginRight: "15px",
        marginBottom: "15px",
      },
    },
  },
});

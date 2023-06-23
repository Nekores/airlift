import vector1 from "../../assets/Vector1.png";
export const styleSheet = (theme) => ({
  root: {
    width: "100%",
  },
  subRoot: {
    [theme.breakpoints.up(767)]: {
      height: "calc(100vh - 90px)",
      display: "flex",
      alignItems: "center",
    },
    [theme.breakpoints.down(767)]: {
      paddingTop: "40px",
      paddingBottom: "40px",
    },
  },
  cardsWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  notificationGroup: {
    "& h2": {
      fontSize: "24px",
      marginBottom: "10px",
    },
  },
  detailsCard: {
    backgroundColor: "#F4EBD7",
    padding: "30px",
    borderRadius: "16px",
    [theme.breakpoints.up(549)]: {
      paddingTop: "60px",
      paddingBottom: 0,
    },

    "& ul": {
      listStyle: "none",
      padding: 0,
    },
    "& > ul": {
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",
      flexWrap: "wrap",
      [theme.breakpoints.down(410)]: {
        display: "block",
      },
      "& > li": {
        [theme.breakpoints.up(410)]: {
          height: "156px",
          position: "relative",
        },
        [theme.breakpoints.up(800)]: {
          "&::after": {
            width: "64px",
            height: "20px",
            content: '""',
            display: "block",
            backgroundSize: "auto",
            backgroundImage: `url(${vector1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "absolute",
            right: "-39px",
            bottom: "22px",
          },
        },
        [theme.breakpoints.down(410)]: {
          display: "block",
        },
        "& .userDetail": {
          marginTop: "20px",
        },
      },
      [theme.breakpoints.down(500)]: {
        "& .userDetail": {
          marginTop: "0 !important",
        },
      },
      "& > li:last-child::after": {
        display: "none",
      },
      "& .userDetail": {
        marginTop: "20px",
      },
      [theme.breakpoints.up(549)]: {
        "& .userDetail": {
          position: "relative",
          top: "-48px",
          marginTop: 0,
        },
      },

      "& li": {
        textDecoration: "none",
        "& h2": {
          color: "#014235 !important",
          fontSize: "24px",
          lineHeight: "34px",
          marginTop: "-2px",
        },

        "& p": {
          fontFamily: "'Poppins', sans-serif",
          margin: 0,
          fontSize: "12px",
          color: "#23262",
          marginBottom: "5px",
          "& strong": {
            color: "#014235",
            fontWeight: "800",
          },
        },
        "& .detailName": {
          fontSize: "12px",
          fontWeight: "600",
          color: "#014235",
        },
        "& .detailUsername": {
          fontSize: "12px",
        },
        "& .detailTwitter": {
          color: "#014235",
          fontWeight: "600",
          width: "86px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "& svg": {
            fontSize: "18px",
          },
          "& svg:last-child": {
            fontSize: "15px",
          },
        },
        "& .detailBittrex": {
          color: "#014235",
          fontWeight: "600",
          width: "86px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "& svg": {
            fontSize: "18px",
          },
          "& svg:last-child": {
            fontSize: "15px",
          },
        },
      },
    },
  },
});

import WOW from "wowjs";

const UseWow = () => {
  const initWow = () => {
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animate__animated",
      offset: 0,
      mobile: false,
      live: true,
      scrollContainer: null,
    });
    wow.init();
  };

  return { initWow };
};

export default UseWow;

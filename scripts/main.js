(function () {
  animations();
})();

const ROOT = "localhost://3000";
const MAIL_PATH = "/";

const sendMail = async (
  firstName,
  lastName,
  company,
  email,
  contact,
  message
) => {};

const animations = () => {
  const tween = KUTE.allFromTo(
    "#stateA",
    { path: "#stateA" },
    { path: "#stateB" },
    { repeat: 999, duration: 1800, yoyo: true, easing: "easingCubicInOut" }
  );
  const tweenB = KUTE.allFromTo(
    "#stateA_top",
    { path: "#stateA_top" },
    { path: "#stateB_top" },
    { repeat: 999, duration: 1800, yoyo: true, easing: "easingCubicInOut" }
  );

  tween.start();
  tweenB.start();
};

//Data for different information Cards

import svg1 from "../resources/server.jpg";
import svg2 from "../resources/svg-2.svg";
import svg3 from "../resources/lockt.png";
import V1 from "../resources/Bitcoin.mp4";

export const homeObj1 = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Cutting Edge Technology",
  headline: "Unlimited Transactions with zero fees",
  description:
    "With the best in class Technology, investing has never been more seamless and fast. Our team is available 24x7 to help you.",
  imgStart: false,
  img: svg1,
  showVideo: false,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  button: "Learn More",
  bgColor: "#1d0c57",
  SubtitleColor: "white",
  headingColor: "white",
};
export const homeObj2 = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Invest in the Future of Finance",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Invest in Crypto and play a role in shaping the future of the world.",
  imgStart: true,
  showVideo: true,
  img: svg2,
  video: V1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: true,
  button: "Invest Now",
  SubtitleColor: "white",
  headingColor: "white",
  bgColor: "black",
};

export const homeObj3 = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "SHA-256 Secured",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Your security is our guarantee. The system is secured with SHA-256 Hashing System. It simply can't be more Secure. ",
  imgStart: false,
  img: svg3,
  showVideo: false,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
  button: "Get Involved",
  SubtitleColor: "white",
  headingColor: "white",
};

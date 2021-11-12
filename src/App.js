import React from "react";
import img1 from "./components/eats_restaurant/img/IMG_0851.png";
import img2 from "./components/eats_restaurant/img/IMG_0850.png";
import "./App.css";
import AppWorks from "./components/eats_restaurant";

const App_Works = [
  "How the app works",
  {
    src: img1,
    alt: "Login",
    imgTitle: "Create an account",
    imgSubTitle: "Create/login to an existing account to get started",
    imgDescr: "An account is created with your email and a desired password",
  },
  {
    src: img2,
    alt: "Delicious food",
    imgTitle: "Explore varieties",
    imgSubTitle: "Shop for your favorites meal as e dey hot.",
    imgDescr:
      "Shop for your favorite meals or drinks and enjoy while doing it.",
  },
];
function App() {
  return <AppWorks App_Works={App_Works} />;
}

export default App;

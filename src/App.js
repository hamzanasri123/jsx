import React from "react";
import "./style.css";
import "./App.css";
import "/Users/dell/Desktop/check/project/src/mageInSrc.jpg";

const App = () => {
  return (
    <div className="App">
      <h1 className="titlered">Your name here</h1>

      <img src="../mageInPublic.jpg" alt="logo2" />
      <img src="./mageInSrc.jpg" alt="logo1" />
      <video>
        <source src="myvideo.mp4" type="video/mp4" alt="vdo" />
      </video>
    </div>
  );
};
export default App;

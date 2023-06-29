import React from "react";
import "./App.css";
import HeaderFrame from "./frames/headerFrame/headerFrame";
import CenterFrame from "./frames/centerFrame/centerFrame";
import FooterFrame from "./frames/footerFrame/footerFrame";

function App() {
  return (
    <div>
      <HeaderFrame />
      <CenterFrame />
      <FooterFrame/>
    </div>
  );
}

export default App;

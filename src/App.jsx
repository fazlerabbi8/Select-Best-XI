import { useState } from "react";
import AllPlayers from "./components/AllPlayers/AllPlayers";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import Toggle from "./components/Toggole/Toggle";
import Selected from "./components/Selected/Selected";

function App() {
  const [activeTab, setActiveTab] = useState("available");

  return (
    <>
      {/* navbar */}
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </div>


      {/* Hero section */}
      <div className="w-11/12 mx-auto">
        <Hero></Hero>
      </div>


      {/* toggle section */}
      <div className="w-11/12 mx-auto mb-5">
        <Toggle activeTab = {activeTab} setActiveTab = {setActiveTab}></Toggle>
         {activeTab === "available" ? <AllPlayers /> : <Selected />}
      </div>

    </>
  );
}

export default App;

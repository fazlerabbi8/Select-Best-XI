import { useState } from "react";
import AllPlayers from "./components/AllPlayers/AllPlayers";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import Toggle from "./components/Toggle/Toggle";
import Selected from "./components/Selected/Selected";
import { toast } from "react-toastify";

function App() {
  const [activeTab, setActiveTab] = useState("available");

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayer = (player) => {
    const isExist = selectedPlayers.find((p) => p.id == player.id);

    if (isExist) {
      toast.error("You already selected this player!");
    } else {
      const newPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newPlayers);
    }
  };

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
        <Toggle
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedPlayers={selectedPlayers}
        ></Toggle>
        {activeTab === "available" ? (
          <AllPlayers handleSelectedPlayer={handleSelectedPlayer} />
        ) : (
          <Selected selectedPlayers={selectedPlayers} />
        )}
      </div>
    </>
  );
}

export default App;

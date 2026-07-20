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

  const [credit, setCredit] = useState(0);
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    if (claimed) {
      toast.error("You already claimed your free credit!");
      return;
    }
    setCredit((prev) => prev + 30000000);
    setClaimed(true);
    toast.success("30,000,000 credit added!");
  };


  const handleSelectedPlayer = (player) => {
    const isExist = selectedPlayers.find((p) => p.id == player.id);

    if (isExist) {
      toast.error("You already selected this player!");
    } else {
      const newPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newPlayers);

      toast.success("Player selected successfully!");
    }
  };

  return (
    <>
      {/* navbar */}
      <div className="w-11/12 mx-auto">
        <Navbar credit={credit}></Navbar>
      </div>

      {/* Hero section */}
      <div className="w-11/12 mx-auto">
        <Hero handleClaim={handleClaim} claimed={claimed}></Hero>
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

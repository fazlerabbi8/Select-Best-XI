import { useEffect, useState } from "react";
import Player from "../Player/Player";

const AllPlayers = () => {
  const [players, setAllPlayers] = useState([]);

  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 space-y-10">
        {players.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default AllPlayers;

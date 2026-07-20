const Selected = ({ selectedPlayers, handleDelete }) => {
  return (
    <div>
      {selectedPlayers.map((player) => (
        <div className="mt-10 flex items-center justify-between border border-gray-300 p-4 rounded">
          <div className="flex items-center justify-center gap-5">
            <div>
              <img className="w-20 h-20 rounded" src={player.image} alt="" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{player.name}</h3>
              <h3 className="text-2xl text-gray-500">{player.battingStyle}</h3>
            </div>
          </div>
          <div>
            <button onClick={() => handleDelete(player.id)} className="btn btn-error">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Selected;

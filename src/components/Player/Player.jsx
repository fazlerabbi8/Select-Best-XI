const Player = ({ player, handleSelectedPlayer }) => {
  const { id, name, country, role, battingStyle, price, image } = player;
  
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure className="h-72">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="card-actions justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold">{country}</h3>
          </div>
          <div>
            <button className="btn">{role}</button>
          </div>
        </div>
        <hr className="text-gray-300" />
        <h3 className="text-2xl font-bold">{battingStyle}</h3>
        <div className="card-actions justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold">Price: {price} USD</h3>
          </div>
          <div>
            <button
              onClick={() => handleSelectedPlayer(player)}
              className="btn"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;

const Toggle = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-3xl font-semibold">{activeTab === "available" ? "Available Players" : "Selected Players"}</h3>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => setActiveTab("available")}
          className={`btn ${activeTab === "available" ? "btn-warning" : ""}`}
        >
          Available
        </button>
        <button
          onClick={() => setActiveTab("selected")}
          className={`btn ${activeTab === "selected" ? "btn-warning" : ""}`}
        >
          Selected
        </button>
      </div>
    </div>
  );
};

export default Toggle;
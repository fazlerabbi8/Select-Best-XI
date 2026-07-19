import hero from "../../assets/images/banner-main.png";

const Hero = () => {
  return (
    <div className="px-5 py-10">
      <div
        className="hero min-h-[500px] rounded-3xl"
        style={{
          background: `
            radial-gradient(circle at top right, #f8c9bb 0%, transparent 30%),
            radial-gradient(circle at bottom left, #69b8ff 0%, transparent 30%),
            linear-gradient(to right, #121212, #1a1a1a, #121212)
          `,
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <img className="mx-auto" src={hero} alt="" />

            <h1 className="text-4xl font-bold text-white mt-4">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>

            <p className="py-6 text-gray-300">
              Beyond Boundaries Beyond Limits
            </p>

            <button className="btn btn-warning">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
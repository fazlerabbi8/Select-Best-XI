import Navbar from "./components/Header/Navbar"
import Hero from "./components/Hero/Hero"

function App() {
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
    </>
  )
}

export default App

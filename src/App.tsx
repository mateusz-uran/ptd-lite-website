import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/howitworks/HowItWorks";
import Topbar from "./components/nav/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Hero />
      <Features />
      <HowItWorks />
    </>
  );
}

export default App;

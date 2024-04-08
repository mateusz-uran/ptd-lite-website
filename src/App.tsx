import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/howitworks/HowItWorks";
import FeaturePage from "./components/features/FeaturePage";
import AvailableFeatures from "./components/features/AvailableFeatures";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Hero />
          <Features />
          <HowItWorks />
        </Layout>
      ),
    },
    {
      path: "/features",
      element: (
        <Layout>
          <AvailableFeatures />
        </Layout>
      ),
    },
    {
      path: "/features/:featureName",
      element: (
        <Layout>
          <FeaturePage />
        </Layout>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

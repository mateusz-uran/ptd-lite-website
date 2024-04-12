import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/howitworks/HowItWorks";
import FeatureSpecification from "./components/features/FeatureSpecification";
import FeaturesPage from "./components/features/FeaturesPage";
import HowItWorksPage from "./components/howitworks/HowItWorksPage";
import HowItWorksWrapper from "./components/howitworks/HowItWorksWrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Hero />
          <Features />
          {/* <HowItWorks /> */}
          <HowItWorksWrapper />
        </Layout>
      ),
    },
    {
      path: "/funkcje",
      element: (
        <Layout>
          <FeaturesPage />
        </Layout>
      ),
    },
    {
      path: "/funkcje/:featureName",
      element: (
        <Layout>
          <FeatureSpecification />
        </Layout>
      ),
    },
    {
      path: "/instrukcje",
      element: (
        <Layout>
          <HowItWorksPage />
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

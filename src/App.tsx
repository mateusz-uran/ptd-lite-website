import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout";
import Features from "./components/features/Features";
import Hero from "./components/hero/Hero";
import FeatureSpecification from "./components/features/FeatureSpecification";
import FeaturesPage from "./components/features/FeaturesPage";
import HowItWorksPage from "./components/howitworks/HowItWorksPage";
import HowItWorksWrapper from "./components/howitworks/HowItWorksWrapper";
import Contact from "./components/contact/Contact";
import { useEffect } from "react";
import EmptyPage from "./EmptyPage";
import GetStarted from "./components/start/GetStarted";

const ScrollToTop = (props: any) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return <>{props.children}</>;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ScrollToTop>
          <Layout>
            <Hero />
            <Features />
            <HowItWorksWrapper />
          </Layout>
        </ScrollToTop>
      ),
      errorElement: (
        <Layout>
          <EmptyPage message="Ups! Wystąpił błąd, wróć na poprzednią stronę." />
        </Layout>
      ),
    },
    {
      path: "/funkcje",
      element: (
        <ScrollToTop>
          <Layout>
            <FeaturesPage />
          </Layout>
        </ScrollToTop>
      ),
    },
    {
      path: "/funkcje/:featureName",
      element: (
        <ScrollToTop>
          <Layout>
            <FeatureSpecification />
          </Layout>
        </ScrollToTop>
      ),
    },
    {
      path: "/instrukcje",
      element: (
        <ScrollToTop>
          <Layout>
            <HowItWorksPage />
          </Layout>
        </ScrollToTop>
      ),
    },
    {
      path: "/start",
      element: (
        <ScrollToTop>
          <Layout>
            <GetStarted />
          </Layout>
        </ScrollToTop>
      ),
    },
    {
      path: "/kontakt",
      element: (
        <ScrollToTop>
          <Layout>
            <Contact />
          </Layout>
        </ScrollToTop>
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

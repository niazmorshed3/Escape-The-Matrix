
import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import CTASection from "./CTASection/CTASection";
import Features from "./Features/Features";
import HighLights from "./Highlight/HighLights";
import HowItWorks from "./HowItWorks/HowItWorks";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden home-page">
            <Helmet>
        <meta charSet="utf-8" />
        <title>{"Home"}|EMX</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>

      {/* Hero / Banner */}
      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4">
        <Banner></Banner>
      </div>

      {/* Why EMX */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <Features />
      </div>

      {/* Featured courses */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <HighLights></HighLights>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <Categories />
      </div>

      {/* How it works */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <HowItWorks />
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <Testimonials />
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-4 w-full pb-16">
        <CTASection />
      </div>
    </div>
  );
};

export default Home;

import Layout from "../../components/shared/Layout";
import Hero from "../../components/hero/Hero";
import MainSection from "../../components/main-section/MainSection";
import FeaturedCollection from "../../components/featured-collection/FeaturedCollection";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <MainSection />
      <FeaturedCollection />
    </Layout>
  );
};

export default Home;

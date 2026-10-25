import React from "react";
import HomeCompanyProfile from "../components/HomeCompanyProfile";
import HomeInfoBoxs from "../components/HomeInfoBoxs";
import HomePO from "../components/HomePO";
import HomePP from "../components/HomePP";
import HomeRD from "../components/HomeRD";
import HomeSlider from "../components/HomeSlider";
import OurRecentProjects from "../components/OurRecentProjects";
import PageMeta from "../shared/PageMeta";

const Home = () => {
  return (
    <div>
      <PageMeta
        title="Home Grow | Organic & Hybrid Seed Production, R&D & Global Export"
        description="Welcome to Home Grow. We specialize in stress-tolerant hybrid vegetable seeds, contract seed production, R&D breeding, and global seed export."
      />
      <HomeSlider />
      <HomeInfoBoxs />
      <HomeCompanyProfile />
      <OurRecentProjects />
      <HomePO />
      <HomePP />
      <HomeRD />
    </div>
  );
};

export default Home;

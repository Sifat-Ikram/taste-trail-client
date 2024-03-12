import Banner from "./banner/Banner";
import SpecialMenu from "./special/SpecialMenu";

const Home = () => {

  return (
    <div className="space-y-20">
      <Banner />
      <SpecialMenu data-aos="fade-up" />
    </div>
  );
};

export default Home;

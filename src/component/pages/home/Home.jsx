import Banner from "./banner/Banner";
import DinnerLunch from "./dinner_lunch/DinnerLunch";
import PopularItem from "./popular_items/PopularItem";
import Promoting from "./promoting/Promoting";
import Review from "./review/Review";
import SpecialMenu from "./special/SpecialMenu";
import Supports from "./support/Supports";

const Home = () => {

  return (
    <div className="space-y-20">
      <Banner />
      <Promoting />
      <SpecialMenu />
      <Supports />
      <DinnerLunch />
      <PopularItem />
      <Review />
    </div>
  );
};

export default Home;

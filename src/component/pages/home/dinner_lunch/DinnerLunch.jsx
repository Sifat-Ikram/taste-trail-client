import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DinnerLunch = () => {
  const [menu] = useMenu();
  useEffect(() => {
    Aos.init({ duration: 3333 });
  }, []);

  const selectedDinnerMenu = menu.filter(
    (item) => item.serve_time === "dinner"
  );
  const selectedLunchMenu = menu.filter((item) => item.serve_time === "lunch");
  const selectedBreakfastMenu = menu.filter(
    (item) => item.serve_time === "Breakfast"
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Choose Your Meal
      </h1>
      <Tabs selectedClassName="bg-blue-900">
        <TabList className="flex justify-center gap-10 mb-8">
          <Tab className="px-6 py-3 bg-blue-800 text-white hover:text-white rounded-md mr-4 cursor-pointer hover:bg-blue-900">
            <h1 className="text-lg font-semibold">Breakfast Time</h1>
          </Tab>
          <Tab className="px-6 py-3 bg-blue-800 text-white hover:text-white rounded-md mr-4 cursor-pointer hover:bg-blue-900">
            <h1 className="text-lg font-semibold">Lunch Time</h1>
          </Tab>
          <Tab className="px-6 py-3 bg-blue-800 text-white hover:text-white rounded-md mr-4 cursor-pointer hover:bg-blue-900">
            <h1 className="text-lg font-semibold">Dinner Time</h1>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col w-3/4 mx-auto gap-3">
            {selectedLunchMenu.map((item) => (
              <div
                key={item._id}
                data-aos="fade-down"
                className="border rounded-md px-10 py-5 hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-800 mt-2">${item.price}</p>
                </div>
                <h1>{item.recipe}</h1>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col w-3/4 mx-auto gap-3">
            {selectedDinnerMenu.map((item) => (
              <div
                key={item._id}
                data-aos="fade-down"
                className="border rounded-md px-10 py-5 hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-800 mt-2">${item.price}</p>
                </div>
                <h1>{item.recipe}</h1>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col w-3/4 mx-auto gap-3">
            {selectedBreakfastMenu.map((item) => (
              <div
                key={item._id}
                data-aos="fade-down"
                className="border rounded-md px-10 py-5 hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                  <p className="text-gray-800 mt-2">${item.price}</p>
                </div>
                <h1>{item.recipe}</h1>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DinnerLunch;

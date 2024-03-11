import { Outlet } from "react-router-dom";
import Navbar from "./component/shared/navbar/Navbar";
import Footer from "./component/shared/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

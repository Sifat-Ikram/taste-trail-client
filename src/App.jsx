import { Outlet } from "react-router-dom";
import Navbar from "./component/shared/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

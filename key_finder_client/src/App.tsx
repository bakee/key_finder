import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Link,
  useLocation
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import CreateCar from "./components/CreateCar/CreateCar";
import CarDetail from "./components/CarDetail/CarDetail";
import AddMember from "./components/AddMember/AddMember";
import Logout from "./components/Logout/Logout";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-car" element={<CreateCar />} />
          <Route path="/detail" element={<CarDetail />} />
          <Route path="/add-member" element={<AddMember />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

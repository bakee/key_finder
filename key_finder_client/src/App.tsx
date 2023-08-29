import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CreateCar from './components/CreateCar/CreateCar';
import CarDetail from './components/CarDetail/CarDetail';
import AddMember from './components/AddMember/AddMember';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-car' element={<CreateCar />} />
        <Route path='/detail' element={<CarDetail />} />
        <Route path='/add-member' element={<AddMember />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

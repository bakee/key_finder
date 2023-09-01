import { FC, useEffect, useState } from "react";
import Car from "../Car/Car";
import { CarDto } from "../../api/dto";
import { getCars } from "../../api/cars";
import { getToken } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const [cars, setCars] = useState<CarDto[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (token == null) {
      navigate("/login");
      return;
    }
    const getCar = async () => {
      const data = await getCars();
      setCars(data);
    };

    getCar();
  }, []);

  return (
    <>
      <h1>Cars</h1>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </>
  );
};

export default Dashboard;

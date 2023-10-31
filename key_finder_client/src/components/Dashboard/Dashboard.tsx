import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Car from "../Car/Car";
import { CarDto } from "../../api/dto";
import { getCars } from "../../api/cars";
import { getToken } from "../../utils/storage";

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
      <div className="mb-2">
        <Link className="btn btn-warning" to="create-car">
          Create Car
        </Link>
      </div>
      {cars.map((car) => (
        <Car key={car.id} car={car} showDetails={true} />
      ))}
    </>
  );
};

export default Dashboard;

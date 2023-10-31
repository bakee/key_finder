import { FC, useEffect, useState } from "react";
import { getCar, updateCar } from "../../api/cars";
import { useNavigate, useParams } from "react-router-dom";
import AddEditCar, { AddEditCarProps } from "../AddEditCar/AddEditCar";
import { showAlert } from "../../utils/alert";
import { CarDto } from "../../api/dto";

interface EditCarProps {}

const EditCar: FC<EditCarProps> = () => {
  const params = useParams();
  const carId = Number(params.carId);
  const navigate = useNavigate();
  const [car, setCar] = useState<CarDto>();

  const getCarToUpdate = async () => {
    const car = await getCar(carId);
    if (!car) {
      showAlert("Car was not found!");
      return;
    }
    setCar(car);
  };

  useEffect(() => {
    getCarToUpdate();
  }, []);

  const handleUpdateCar = async (
    make: string,
    model: string,
    year: number,
    licensePlate: string
  ) => {
    let response = await updateCar(carId, make, model, year, licensePlate);
    showAlert("Car updated!");
    navigate("/");
  };

  const createCarProps: AddEditCarProps = {
    title: "Update Car",
    make: car?.make ?? "",
    model: car?.model ?? "",
    year: car?.year ?? 0,
    licensePlate: car?.licensePlate ?? "",
    actionText: "Update",
    onSubmit: handleUpdateCar,
  };

  return <AddEditCar {...createCarProps} />;
};

export default EditCar;

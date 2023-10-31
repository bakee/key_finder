import { FC } from "react";
import { createCar } from "../../api/cars";
import { useNavigate } from "react-router-dom";
import AddEditCar, { AddEditCarProps } from "../AddEditCar/AddEditCar";

interface CreateCarProps {}

const CreateCar: FC<CreateCarProps> = () => {
  const navigate = useNavigate();

  const handleCreateCar = async (
    make: string,
    model: string,
    year: number,
    licensePlate: string
  ) => {
    let response = await createCar(make, model, year, licensePlate);
    console.log(response);
    navigate("/");
  };

  const createCarProps: AddEditCarProps = {
    title: "Create Car",
    make: "",
    model: "",
    year: 0,
    licensePlate: "",
    actionText: "Create",
    onSubmit: handleCreateCar,
  };

  return <AddEditCar {...createCarProps} />;
};

export default CreateCar;

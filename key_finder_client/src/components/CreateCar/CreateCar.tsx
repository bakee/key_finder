import { FC, useState } from "react";
import { createCar } from "../../api/cars";
import { useNavigate } from "react-router-dom";

interface CreateCarProps {}

const CreateCar: FC<CreateCarProps> = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [licensePlate, setLincensePlate] = useState("");
  const navigate = useNavigate();

  const handleCreateCar = async () => {
    let response = await createCar(make, model, year, licensePlate);
    console.log(response);
    navigate("/");
  };

  return (
    <>
      <h1>Create Car</h1>
      <div className="form-group">
        <label>Make</label>
        <input
          type="text"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Model</label>
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />{" "}
      </div>
      <div className="form-group">
        <label>Year</label>
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />{" "}
      </div>
      <div className="form-group">
        <label>License Plate</label>
        <input
          type="text"
          placeholder="License Plate"
          value={licensePlate}
          onChange={(e) => setLincensePlate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleCreateCar}>
        Create
      </button>
    </>
  );
};

export default CreateCar;

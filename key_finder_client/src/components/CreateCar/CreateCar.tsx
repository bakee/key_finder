import { FC, useState } from "react";
import { createCar } from "../../api/cars";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

interface CreateCarProps {}

const CreateCar: FC<CreateCarProps> = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(0);
  const [licensePlate, setLincensePlate] = useState("");
  const navigate = useNavigate();

  const handleCreateCar = async (e: any) => {
    e.preventDefault();
    let response = await createCar(make, model, year, licensePlate);
    console.log(response);
    navigate("/");
  };

  return (
    <>
      <h3 className="text-center">Create Car</h3>
      <hr />
      <Form onSubmit={handleCreateCar}>
        <Form.Group className="mb-3">
          <Form.Label>Make</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter year"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>License Plate</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter license plate"
            value={licensePlate}
            onChange={(e) => setLincensePlate(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </>
  );
};

export default CreateCar;

import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export interface AddEditCarProps {
  title: string;
  make: string;
  model: string;
  year: number;
  licensePlat: string;
  actionText: string;
  onSubmit: any;
}

const AddEditCar: FC<AddEditCarProps> = (props) => {
  const [make, setMake] = useState(props.make);
  const [model, setModel] = useState(props.model);
  const [year, setYear] = useState(props.year);
  const [licensePlate, setLincensePlate] = useState(props.licensePlat);
  const navigate = useNavigate();

  const handleCreateCar = async (e: any) => {
    e.preventDefault();
    props.onSubmit(make, model, year, licensePlate);
  };

  return (
    <>
      <h3 className="text-center">{props.title}</h3>
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
          {props.actionText}
        </Button>
      </Form>
    </>
  );
};

export default AddEditCar;

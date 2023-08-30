import React, { FC } from "react";
import { CarDto } from "../../api/dto";
import { Link, redirect, useNavigate } from "react-router-dom";

interface CarProps {
  car: CarDto;
}

const Car: FC<CarProps> = (data) => {
  const navigate = useNavigate();
  const gotoDetails = () => {
    navigate('/detail', {state: data.car});
  }
  return (
  <div className="card" style={{width: 300}}>
    <div className="card-body">
      <h3 className="card-title">{data.car.licensePlate}</h3>
      <h5 className="card-text">{data.car.make} {data.car.model} {data.car.year}</h5>
      <button onClick={gotoDetails} className="btn btn-primary">Details</button>
    </div>
  </div>
)};

export default Car;
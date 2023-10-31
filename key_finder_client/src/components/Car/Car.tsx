import { FC } from "react";
import { CarDto } from "../../api/dto";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

interface CarProps {
  car: CarDto;
  showDetails: boolean;
  isOwner: boolean;
}

const Car: FC<CarProps> = (props) => {
  const navigate = useNavigate();
  const gotoDetails = () => {
    navigate("/detail", { state: props.car });
  };
  return (
    <div className="card bg-info mb-4" style={{ width: 300 }}>
      <div className="card-body">
        <h3 className="card-title">{props.car.licensePlate}</h3>
        <h5 className="card-text">
          {props.car.make} {props.car.model} {props.car.year}
        </h5>
        {props.showDetails && (
          <button onClick={gotoDetails} className="btn btn-primary">
            Details
          </button>
        )}
        {!props.showDetails && props.isOwner && (
          <Link className="btn btn-warning" to={`/edit/${props.car.id}`}>
            Edit
          </Link>
        )}
      </div>
    </div>
  );
};

export default Car;

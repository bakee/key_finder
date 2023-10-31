import { FC } from "react";
import { CarDto } from "../../api/dto";
import { useNavigate } from "react-router-dom";

interface CarProps {
  car: CarDto;
  showDetails: boolean;
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
      </div>
    </div>
  );
};

export default Car;

import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CarDetailDto, CarDto } from "../../api/dto";
import { getCarDetail } from "../../api/cars";
import Car from "../Car/Car";
import Member from "../Member/Member";

interface CarDetailProps {}

const CarDetail: FC<CarDetailProps> = () => {
  const [carDetail, setCarDetail] = useState<CarDetailDto>();
  const location = useLocation();
  useEffect(() => {
    const car: CarDto = location.state;
    const getCarDetails = async () => {
      const data = await getCarDetail(car.id!);
      setCarDetail(data);
    };
    getCarDetails();
  });

  return (
    <div className="container">
      <h3>Car Details</h3>
      {!carDetail ? <div>Loading...</div> : <Car car={carDetail!.car} />}
      {carDetail && carDetail.members.map((m) => <Member member={m} />)}
    </div>
  );
};

export default CarDetail;

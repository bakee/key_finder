import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CarDetailDto, CarDto, KeyDto } from "../../api/dto";
import { getCarDetail } from "../../api/cars";
import Car from "../Car/Car";
import Member from "../Member/Member";
import Key from "../Key/Key";

interface CarDetailProps {}

const CarDetail: FC<CarDetailProps> = () => {
  const [carDetail, setCarDetail] = useState<CarDetailDto>();
  const [keys, setKeys] = useState<KeyDto[]>([]);
  const location = useLocation();
  useEffect(() => {
    const car: CarDto = location.state;
    const getCarDetails = async () => {
      const data = await getCarDetail(car.id!);
      data.members.sort((a, b) => b.keys.length - a.keys.length);
      let allKeys: KeyDto[] = [];
      data.members.forEach((m) => {
        m.keys.forEach((k) => allKeys.push(k));
      });
      setKeys(allKeys);
      setCarDetail(data);
    };
    getCarDetails();
  }, []);

  return (
    <>
      <h3>Car Details</h3>
      {!carDetail ? <div>Loading...</div> : <Car car={carDetail!.car} showDetails={false} />}
      <h4>Members</h4>
      <div className="mb-2">
        <button className="btn btn-primary">Add Member</button>
      </div>
      {carDetail && carDetail.members.map((m) => <Member member={m} />)}
    </>
  );
};

export default CarDetail;

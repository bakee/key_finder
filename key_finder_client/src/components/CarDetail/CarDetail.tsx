import React, { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CarDetailDto, CarDto, KeyDto, UserDto } from "../../api/dto";
import { getCarDetail } from "../../api/cars";
import Car from "../Car/Car";
import Member from "../Member/Member";
import { getUserByEmail } from "../../api/user";
import { addShareHolder } from "../../api/shareHolders";
import { showAlert } from "../../utils/alert";
import { getUser } from "../../utils/storage";

interface CarDetailProps {}

const CarDetail: FC<CarDetailProps> = () => {
  const [carDetail, setCarDetail] = useState<CarDetailDto>();
  const [keys, setKeys] = useState<KeyDto[]>([]);
  const [users, setUsers] = useState<UserDto[]>([]);
  const location = useLocation();
  const car: CarDto = location.state;
  const currentUser = getUser();

  const addMember = async () => {
    const userEmail = prompt("Member email: ");
    if (userEmail == null || userEmail.trim().length == 0) {
      showAlert("Email can not be empty!");
      return;
    }

    const user = await getUserByEmail(userEmail!);
    if (user == null) {
      showAlert("Invalid email address!");
      return;
    }

    try {
      await addShareHolder(car.id!, user.id!);
      await getCarDetails();
      showAlert("Member added successfully!");
    } catch (error: any) {
      showAlert(error);
    }
  };

  const getCarDetails = async () => {
    const data = await getCarDetail(car.id!);
    data.members.sort((a, b) => b.keys.length - a.keys.length);
    let allKeys: KeyDto[] = [];
    let allUsers: UserDto[] = [];
    data.members.forEach((m) => {
      if (m.member.id !== currentUser?.id) {
        allUsers.push(m.member);
      }
      m.keys.forEach((k) => allKeys.push(k));
    });
    setKeys(allKeys);
    allUsers.sort((u1, u2) => u1.name.localeCompare(u2.name));
    setUsers(allUsers);
    setCarDetail(data);
  };

  useEffect(() => {
    getCarDetails();
  }, []);

  return (
    <>
      <h3>Car Details</h3>
      {!carDetail ? (
        <div>Loading...</div>
      ) : (
        <Car car={carDetail!.car} showDetails={false} />
      )}
      <h4>Members</h4>
      <div className="mb-2">
        <button className="btn btn-primary" onClick={addMember}>
          Add Member
        </button>
      </div>
      {carDetail &&
        carDetail.members.map((m) => (
          <Member member={m} reload={getCarDetails} users={users} />
        ))}
    </>
  );
};

export default CarDetail;

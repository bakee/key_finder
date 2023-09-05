import axios, { AxiosError } from "axios";
import { makeUrl } from "./common";
import { getToken } from "../utils/storage";
import { CarDetailDto, CarDto, KeyLocationDto } from "./dto";

export const getCars = async (): Promise<CarDto[]> => {
  const apiPath = makeUrl("/cars");
  try {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let response = await axios.get(apiPath, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const getCarDetail = async (carId: number): Promise<CarDetailDto> => {
  const apiPath = makeUrl("/cars/" + carId);
  try {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let response = await axios.get(apiPath, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createCar = async (
  make: string,
  model: string,
  year: number,
  licensePlate: string
): Promise<CarDto[]> => {
  const apiPath = makeUrl("/cars");
  try {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body: CarDto = {
      id: undefined,
      make: make,
      model: model,
      year: year,
      licensePlate: licensePlate,
    };
    let response = await axios.post(apiPath, body, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const getKeyLocationHistory = async (carId: number): Promise<KeyLocationDto[]> => {
  const apiPath = makeUrl(`/cars/${carId}/history`);
  try {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let response = await axios.get(apiPath, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return [];
};
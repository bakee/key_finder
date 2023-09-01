import axios from "axios";
import { getToken } from "../utils/storage";
import { makeUrl } from "./common";
import { ShareHolderDto } from "./dto";

export const addShareHolder = async (carId: number, memberId: number) => {
  const apiPath = makeUrl("/shareholders");
  try {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body: ShareHolderDto = {
      carId: carId,
      memberId: memberId,
    };

    let response = await axios.post(apiPath, body, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return [];
};

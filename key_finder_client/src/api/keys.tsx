import axios from "axios";
import { getToken } from "../utils/storage";
import { makeUrl } from "./common";
import { KeyDto } from "./dto";

export const claimKey = async (keyId: number) => {
  const apiPath = makeUrl("/keys/claim");
  try {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body: KeyDto = {
      keyId: keyId,
      memberId: 0,
      name: "",
    };

    let response = await axios.put(apiPath, body, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const transferKey = async (keyId: number, memberId: number) => {
  const apiPath = makeUrl("/keys/transfer");
  try {
    const token = getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body: KeyDto = {
      keyId: keyId,
      memberId: memberId,
      name: "",
    };

    let response = await axios.put(apiPath, body, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return [];
};

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showAlert = (message: string) => {
  toast(message, {autoClose: 2000});
};

import { toast } from "react-toastify";

export const showToast = (type, message) => {
  if (!message) {
    return;
  } else {
    toast[type](message);
  }
};

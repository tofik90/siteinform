import axios from "axios";
import {
  setIsLoading,
  setHostingData,
  setRequestMessage,
  setRequestResultCode,
  setTechData,
  setSiteAddress,
} from "../store/index";

const whoHostApiKey =
  "6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8";
const whatCmsApiKey =
  "6252cf7b9f5534edd8d5e40b4660fe03bcadfb2336018f21986567633b9adb776df7d8";

// Используем отдельные загрузчики на случай изменения API, apiKey или добавления новых загрузчиков.

export const loadHostingData = (address) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      dispatch(setSiteAddress(address));
      const response = await axios.get(
        `https://www.who-hosts-this.com/API/Host?key=${whoHostApiKey}&url=${address}`
      );
      dispatch(setHostingData(response.data));
      dispatch(setRequestResultCode(response.data.result.code));
      dispatch(setRequestMessage(response.data.result.msg));
      dispatch(setIsLoading(false));
    } catch (e) {
      dispatch(setRequestResultCode(500));
      dispatch(setRequestMessage("Внутренняя ошибка сервера"));
      dispatch(setIsLoading(false));
    }
  };
};

export const loadTechData = (address) => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      dispatch(setSiteAddress(address));
      const response = await axios.get(
        `https://whatcms.org/API/Tech?key=${whatCmsApiKey}&url=${address}`
      );
      dispatch(setTechData(response.data));
      dispatch(setRequestResultCode(response.data.result.code));
      dispatch(setRequestMessage(response.data.result.msg));
      dispatch(setIsLoading(false));
    } catch (e) {
      dispatch(setRequestResultCode(500));
      dispatch(setRequestMessage("Внутренняя ошибка сервера"));
      dispatch(setIsLoading(false));
    }
  };
};

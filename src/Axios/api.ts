import axios from "axios";
import { countryListApi } from "./countryListApi";

const actionHandler = (payload: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    payload.baseURL = "https://restcountries.com/v2";

    axios(payload)
      .then((response: any) => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response);
        } else {
          console.log("failure", response);
          reject(response);
        }
      })
      .catch((err: any) => {
        console.log(err);
        reject(err);
      });
  });
};

const api = {
  actionHandler,
 countryListApi,
};

export default api;

import axios from "axios";
import { dataInterfaceWeather } from "../interfaces/dataInterface";

// Requesting Information API weather
const requestInformation = async (place?: String) => {
  const { data } = await axios.get<dataInterfaceWeather>(
    `/current.json?key=&q=${place}`,
    {
      baseURL: "http://api.weatherapi.com/v1",
      params: {
        key: "29b74c77ae35422f89c21401211410",
        responseType: "json",
      },
    }
  );

  console.log(data);
};

export default requestInformation;

import axios from "axios";
import { dataInterfaceWeather } from "../interfaces/dataInterface";
import { structurSaveLocation } from "../layout/bannerLocaltion/structureSavedLocation";
import { showColorMessage } from "../components/showMessage";

// Requesting Information API weather
const requestInformation = async (place?: String) => {
	try {
		const { data } = await axios.get<dataInterfaceWeather>(`/current.json?key=&q=${place}`, {
			baseURL: "http://api.weatherapi.com/v1",
			params: {
				key: "29b74c77ae35422f89c21401211410",
				responseType: "json",
			},
		});

		structurSaveLocation(data);

		// Agregando Error a la pantalla
		showColorMessage("green");
	} catch (error) {
		showColorMessage("red", "error");
		/* console.clear(); */
	}
};

export default requestInformation;

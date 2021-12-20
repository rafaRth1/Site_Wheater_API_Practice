import { dataInterfaceWeather } from "../../interfaces/dataInterface";
import { ObjectPlaceGet } from "../../interfaces/objectPlaceGet";
import { renderLocation } from "./renderLocation";

// Variables
const allLocationCard = document.querySelector(".all-location-card");

// Interface

let arrayLocations: ObjectPlaceGet[] = [];

// Add Structure Html
export const structurSaveLocation = (placeGet: dataInterfaceWeather) => {
	const {
		condition: { icon },
		temp_c,
	} = placeGet.current;
	const { name, region, country } = placeGet.location;

	const objectPlaceGet: ObjectPlaceGet = {
		img: icon,
		tempCelius: temp_c.toString(),
		name,
		region,
		country,
		id: new Date().getTime(),
	};

	// Save datas in a array
	arrayLocations = [...arrayLocations, objectPlaceGet];

	console.log(arrayLocations);

	renderLocation(arrayLocations);
	removeLocation();

	function removeLocation() {
		// Variables
		const closeOutline = document.querySelectorAll(".close-outline");
		const { id } = objectPlaceGet;

		closeOutline.forEach((el) => {
			el.addEventListener("click", () => {
				arrayLocations = arrayLocations.filter((idItem) => {
					return idItem.id !== id;
				});
				renderLocation(arrayLocations);
			});
		});
	}
	/* const locationCard = arrayLocations.reduce((acc, user: ObjectPlaceGet) => acc + locationTemplate(user), "");

	allLocationCard.innerHTML = locationCard;

	function locationTemplate(user: ObjectPlaceGet) {
		const { img, tempCelius, name, region, country } = user;

		return `
          <div class="locations-card">
            <img src="${img}" alt="IconClimate.png">
            <span class="temperature">${tempCelius}°</span>
            <span class="location-name"> ${country}, ${name}, ${region}</span>
            <ion-icon name="close-outline" class="close-outline"></ion-icon>
          </div>
            `;
	} */
};

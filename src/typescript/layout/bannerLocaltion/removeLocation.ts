import { ObjectPlaceGet } from "../../interfaces/objectPlaceGet";
import { renderLocation } from "./renderLocation";

export function removeLocation(objectLocation: ObjectPlaceGet, arrayLocation: ObjectPlaceGet[]) {
	// Variables
	const closeOutline = document.querySelectorAll(".close-outline");
	const { id } = objectLocation;

	console.log(arrayLocation);

	closeOutline.forEach((el) => {
		el.addEventListener("click", () => {
			arrayLocation = arrayLocation.filter((idItem) => {
				return idItem.id !== id;
			});
			return (arrayLocation = [...arrayLocation]);
		});
	});
}

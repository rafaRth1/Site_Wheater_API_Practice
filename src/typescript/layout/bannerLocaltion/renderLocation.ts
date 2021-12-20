import { ObjectPlaceGet } from "../../interfaces/objectPlaceGet";
import { reduceLocationName } from "./reduceLocationName";
import { removeLocation } from "./removeLocation";

export function renderLocation(arrLocation: ObjectPlaceGet[]): void {
	const fragmento: DocumentFragment = document.createDocumentFragment();
	const allLocationCard: Element = document.querySelector(".all-location-card");

	cleanNode(allLocationCard);
	for (const el of arrLocation) {
		const { img, tempCelius, region, country, name, id } = el;

		const div = document.createElement("div");
		div.classList.add("locations-card");

		div.dataset.dataId = id.toString();

		div.innerHTML = `
            <img src="${img}" alt="iconClimate.png">
            <span class="temperature">${tempCelius}°</span>
            <span class="location-name"> ${country}, ${name}, ${region}</span>
            <ion-icon name="close-outline" class="close-outline"></ion-icon>
            
        `;

		fragmento.appendChild(div);
		allLocationCard.appendChild(fragmento);

		// Function Reduce Name
		reduceLocationName();
	}
}

function cleanNode(nodeParent: Element) {
	while (nodeParent.firstChild) {
		nodeParent.removeChild(nodeParent.firstChild);
	}
}

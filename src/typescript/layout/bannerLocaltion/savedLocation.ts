import { dataInterfaceWeather } from "../../interfaces/dataInterface";
import { reduceLocationName } from "./reduceLocationName";

// Variables
const allLocationCard = document.querySelector(".all-location-card");

// Interface

interface ObjectPlaceGet {
  img: string;
  tempCelius: string;
  name: string;
  region: string;
  country: string;
}

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
  };

  // Save datas in a array
  arrayLocations = [...arrayLocations, objectPlaceGet];

  const locationCard = arrayLocations.reduce(
    (acc, user: ObjectPlaceGet) => acc + locationTemplate(user),
    ""
  );

  allLocationCard.innerHTML = locationCard;

  function locationTemplate(user: ObjectPlaceGet) {
    const { img, tempCelius, name, region, country } = user;

    return `
          <div class="locations-card">
            <img src="${img}" alt="IconClimate.png">
            <span class="temperature">${tempCelius}°</span>
            <span class="location-name""> ${country}, ${name}, ${region}</span>
            <ion-icon name="ellipsis-vertical-outline" class="ellipsis-vertical-outline"></ion-icon>
          </div>
            `;
  }

  reduceLocationName();
};

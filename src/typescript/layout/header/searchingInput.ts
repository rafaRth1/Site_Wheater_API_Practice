import requestInformation from "../../api/requestInformation";

const searching: HTMLInputElement = document.querySelector(".searching");

const getWeather = () => {
  const searchingInput: Element = document.querySelector(".searching");

  searchingInput?.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      requestInformation(searching.value);
      searching.value = "";
    }
  });
};

getWeather();

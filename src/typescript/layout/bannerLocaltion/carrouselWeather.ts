export const carrouselWeather = () => {
	const fila: HTMLElement = document.querySelector(".all-location-card");
	const climates = document.querySelector(".locations-card");

	const flechaDerecha = document.querySelector("#rigth");
	const flechaIzquierda = document.querySelector("#left");

	flechaIzquierda.addEventListener("click", () => {
		fila.scrollLeft -= 300;
	});

	flechaDerecha.addEventListener("click", () => {
		fila.scrollLeft += 300;
	});
};

carrouselWeather();

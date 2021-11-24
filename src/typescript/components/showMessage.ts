const searching: HTMLElement = document.querySelector(".searching");

export const showColorMessage = (color: string, type?: string) => {
  if (type === "error") {
    searching.style.outline = `solid ${color} 0.2rem`;

    setTimeout(() => {
      searching.style.outline = `solid white 0.2rem`;
    }, 1400);
  } else {
    searching.style.outline = `solid ${color} 0.2rem`;

    setTimeout(() => {
      searching.style.outline = `solid white  0.2rem`;
    }, 1400);
  }
};

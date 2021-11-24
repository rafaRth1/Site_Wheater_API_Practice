export const reduceLocationName = () => {
  const locationName: NodeListOf<Element> =
    document.querySelectorAll(".location-name");

  for (let item of locationName) {
    const sizeText: number = item.firstChild.nodeValue.length;
    const textContentItem: string = item.firstChild.nodeValue;

    if (sizeText >= 35) {
      item.firstChild.nodeValue = textContentItem.slice(0, 30).concat("...");
    }
  }
};

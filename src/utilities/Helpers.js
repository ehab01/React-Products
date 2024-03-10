import Tile from "../reusable-components/Tile";
export const sortAscending = (filterdProducts) => {
  return filterdProducts.sort((a, b) => {
    const priceA = parseFloat(a.price.slice(1));
    const priceB = parseFloat(b.price.slice(1));
    return priceA - priceB;
  });
};

export const sortdescending = (filterdProducts) => {
  return filterdProducts.sort((a, b) => {
    const priceA = parseFloat(a.price.slice(1));
    const priceB = parseFloat(b.price.slice(1));
    return priceB - priceA;
  });
};
export const sortByRecentlyAdded = (filterdProducts) => {
  return filterdProducts.sort((a, b) => {
    const createdAtA = new Date(a.createdAt);
    const createdAtB = new Date(b.createdAt);
    return createdAtB - createdAtA;
  });
};
export const drawProductTile = (filterdProducts) => {
  return filterdProducts.map(
    ({ id, name, price, imageSrc, imageAlt, href }) => (
      <Tile
        key={id}
        name={name}
        price={price}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        href={href}
      />
    )
  );
};

export const filterByCategory = (filterdProducts, selectedFilter) => {
  return filterdProducts.filter(({ category }) => category === selectedFilter);
};

export const sideFiltering = (selectedFilter, filterdProducts) => {

  let priceRangeObject;
  if (typeof selectedFilter === 'string') {
    try {
      priceRangeObject = JSON.parse(selectedFilter);
      return filterdProducts.filter((product) => {
        const price = parseInt(product.price.replace('$', ''));
        return price >= priceRangeObject.min && price <= priceRangeObject.max;
      });
    } catch (error) {
      // Handle the case when the value is not a valid JSON string
      return filterByCategory(filterdProducts, selectedFilter);
    }
  }
}

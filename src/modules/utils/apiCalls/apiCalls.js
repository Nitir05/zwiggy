import { API_URL } from "utils/constants";

const getRestaurantData = async () => {
  const result = await fetch(API_URL);
  const json = await result.json();
  console.log(json);
  const gridElements = json?.data?.cards.filter(
    (c) => c.card?.card?.id === "restaurant_grid_listing",
  );
  const listOfRestros =
    gridElements[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return listOfRestros;
};

export { getRestaurantData };

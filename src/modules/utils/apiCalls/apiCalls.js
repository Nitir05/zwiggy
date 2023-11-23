import { API_URL } from "utils/constants";

const getRestaurantData = async () => {
  const result = await fetch(API_URL);
  const json = await result.json();
  const gridElements = json?.data?.cards.filter(
    (c) => c.card?.card?.id === "restaurant_grid_listing",
  );
  const offerElements = json?.data?.cards.filter(
    (c) => c.card?.card?.id === "topical_banner",
  );
  const whatsOnYourMind = json?.data?.cards.filter(
    (c) => c.card?.card?.id === "whats_on_your_mind",
  );
  const listOfRestros =
    gridElements[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const listOfOffers =
    offerElements[0]?.card?.card?.gridElements?.infoWithStyle?.info;
  const listOfWhatsOnYourMind =
    whatsOnYourMind[0]?.card?.card?.imageGridCards?.info;
  return {
    restaurants: listOfRestros,
    offers: listOfOffers,
    whatsOnYourMind: listOfWhatsOnYourMind,
  };
};

export { getRestaurantData };

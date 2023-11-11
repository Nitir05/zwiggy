import {API_URL} from "utils/constants";

const getRestaurantData = async () => {
    const result = await fetch(API_URL);
    const json = await result.json();
    const listOfRestros = json?.data?.cards.filter(
        (c) => c.card?.card?.id === "restaurant_grid_listing"
    );
    return listOfRestros;
}

export {getRestaurantData};
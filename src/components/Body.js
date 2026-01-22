import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [originalList, setOriginalList] = useState([]);

  const handleSearch = () => {
    const searchInput = document
      .querySelector(".search-input")
      .value.toLowerCase();
    const restaurantCards = document.querySelectorAll(".restaurant-card");
    restaurantCards.forEach((card) => {
      const name = card.querySelector(".rest-name").innerText.toLowerCase();
      if (name.includes(searchInput)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4640087729816&lng=77.02618695368315&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurants);
    setOriginalList(restaurants);
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <h1>Welcome to Food Smile😊 Good Day!</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for your favorite food..."
          className="search-input"
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setRestaurantList(filteredData);
          }}
        >
          Filter
        </button>
        <button
          className="reset-btn"
          onClick={() => {
            setRestaurantList(originalList);
          }}
        >
          Reset
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;

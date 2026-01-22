import { CLOUDINARY_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, sla, cloudinaryImageId, costForTwo } =
    props.restaurant.info;
  return (
    <div className="restaurant-card" onClick={() => alert(name)}>
      <div className="restaurant-image-placeholder">
        <img
          src={CLOUDINARY_URL + cloudinaryImageId}
          alt="restaurant"
          className="restaurant-img"
        />
      </div>
      <h2 className="rest-name">{name}</h2>
      <div>
        <div className="delivery-rating">
          <p className="rating">⭐ {avgRating}</p>
          <p className="delivery">
            {" "}
            ⌛{sla.deliveryTime} - {sla.deliveryTime + 5} mins
          </p>
        </div>
        <p className="cuisines">{cuisines.join(", ")}</p>

        <p>{costForTwo}</p>
      </div>
      <div className="explore-btn-div">
        <button className="explore-btn">Explore All</button>
      </div>
    </div>
  );
};

export default RestaurantCard;

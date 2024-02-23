import {img_url } from "../../config";

const RestaurantCard=({name,cloudinaryImageId,cuisines,avgRating,areaName,sla})=>{
   
    return (
        <div className="card">
        <div className="card-img">
        <img src={img_url+cloudinaryImageId} />
        </div>
        <div className="card-details">
        <h3 className="card-name">{name}</h3>
        <h4>{avgRating} stars  </h4>
        <h4>{sla.slaString}</h4>
        <h4 className="card-cuisines"> {cuisines.join(", ")}</h4>
        <h4 className="card-areaname">{areaName}</h4>
        </div>
        </div>
    )
}
export default RestaurantCard;
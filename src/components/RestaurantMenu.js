import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {img_url } from "../../config";

const RestaurantMenu=()=>{
    const {id}=useParams();
    
    const [ restaurantDetail , setRestaurantDetail]=useState({});
    const [restaurantMenu, setRestaurantMenu]=useState({});

    useEffect(()=>{
        getRestaurantMenu();
        console.log("dsfb");
    },[])

    async function getRestaurantMenu() {
        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9121181&lng=77.6445548&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        
        console.log(json?.data?.cards[2]?.card?.card?.info);
        setRestaurantDetail(json?.data?.cards[2]?.card?.card?.info);
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        setRestaurantMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }


    return (
        <div className="menu">
        <div className="menuimg"> 
        <h2>{restaurantDetail?.name}</h2>
        <img src={ img_url+restaurantDetail?.cloudinaryImageId} alt="" />
        <h3>City:{restaurantDetail?.city}</h3>
        
        </div>
        <div>
            <h1>Menu card</h1>
            <ul>
            {
                Object.values(restaurantMenu).map((item)=>(
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                ))
            }
            </ul>
            
        </div>
        </div>
    )
}
export default RestaurantMenu;
import RestaurantCard from "./RestaurantCard";
import {restaurantList} from "../../config";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

function filterData(searchText,allRestaurants){
    const filterData=allRestaurants.filter((restaurant)=>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

function RatingData(allRestaurants){
    const RatingData=allRestaurants.filter((restaurant)=>
        restaurant.info.avgRating>4.3
    );
    return RatingData;
}

const Body=()=>{
    //Searchtext is a local state variable 
    const [searchText,setSearchText]=useState("") //To create state variable
    const [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurants,setfilteredRestaurants]=useState([]);

    useEffect(()=>{
        getRestaurants();
    },[])
     
    async function getRestaurants() {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json=await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(!allRestaurants){
        return null;
    }
    
    return allRestaurants.length===0 ?(<Shimmer/>):(
        <>  
        <div className="search-container">
            <input 
            type="text" 
            className="search-input" 
            placeholder="Search For Restaurant"
            value={searchText}
            onChange={(e)=> 
                setSearchText(e.target.value)}
            />
            
            <button className="search-btn" 
            onClick={()=>{
                const data=filterData(searchText,allRestaurants);
                setfilteredRestaurants(data);
            }} >Search</button>
        </div>

        <button className="search-btn" 
            onClick={()=>{
                const data=RatingData(allRestaurants);
                setfilteredRestaurants(data);
            }} >Rating +4.0</button>

        <div className="restaurant-List">
            
            {
                filteredRestaurants.length===0? <h1 style={{color:"blue"}}>No Match found</h1>:
                filteredRestaurants?.map((restaurant)=>{
                   return <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} className="decor1"> <RestaurantCard {...restaurant?.info} key={restaurant.info.id} /> </Link>
                })
            }
        {/* <RestaurantCard {...restrauntList[0].info}/>
        <RestaurantCard {...restrauntList[1].info}/> */}
        
        </div>
        </>
    )
};

export default Body;

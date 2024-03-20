import RestuCard from "./RestuCard";
import { burgerKing } from "../config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



//what is state ?  //just have to create local variable in react we need to use state   (it's a built in react object that contain information or data about the component) 
//what is hooks?   // it's just a js function. give differenent functionality .Many types like useState 
//what is useState?  (from react as named import)

const filter = (searchText, burgerKing) => {


  return burgerKing.filter((restu) =>
    restu.name.includes(searchText))


}



const Body = () => {
  const [searchText, setSearchText] = useState();   //to create local state variable //return an array (ist is state variable (use like a normal varaible )  )
  //inside the userState you have give default value 
  //2nd index is function through which we have to change the state i.e value




  // const [searchClick,setSearchClick]=useState("false");
  const [restu, setRestru] = useState([]);



  //useEffect hook

  //it will run after render

  useEffect(() => {
    getRestu();


  }, [])

  useEffect(() => {
    console.log("Hey2!!");
  }, [searchText])

  const getRestu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&collection=83649&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null    ");
    const json_data = await data.json();

    setRestru(json_data?.data?.cards);
  }

  console.log("Render!!");




  //have to change variable in react that i use 
  //chabges variable == react kind of varibale 
  //react variable == state variable 
  //every componebt in react maintain a state (you put varible into that state )
  //local variable == create a state 
  //state == useState hook to create variable (like let h="text")

  //react 

  return (
    <div className="resturList">
      {
        restu.map((res) => (
          console.log(res),
          
          <RestuCard
            key={res.id} // Ensure each RestuCard has a unique key
            name={res?.card?.card?.info?.name}
            img={res?.card?.card?.info?.cloudinaryImageId}
            rating={res?.card?.card?.info?.totalRatingsString}
            time={res?.card?.card?.info?.sla?.slaString}
            cuisines={res?.card?.card?.info?.cuisines}
          />
        
        ))}
      
      
    </div>
  );
}
export default Body;
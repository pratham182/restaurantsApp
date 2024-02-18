import RestuCard from "./RestuCard";
import { burgerKing } from "../config";
import { useEffect, useState } from "react";



//what is state ?  //just have to create local variable in react we need to use state   (it's a built in react object that contain information or data about the component) 
//what is hooks?   // it's just a js function. give differenent functionality .Many types like useState 
//what is useState?  (from react as named import)

const filter=(searchText,burgerKing)=>{
  
  
return burgerKing.filter((restu)=>
restu.name.includes(searchText))


}



const Body=()=>{
const [searchText,setSearchText]=useState();   //to create local state variable //return an array (ist is state variable (use like a normal varaible )  )
//inside the userState you have give default value 
//2nd index is function through which we have to change the state i.e value


// const [searchClick,setSearchClick]=useState("false");
const [restu,setRestru]=useState(burgerKing);



//useEffect hook

//it will run after render

useEffect(()=>{
  getRestu();
},[])

useEffect(()=>{
  console.log("Hey2!!");
},[searchText])

const getRestu=async()=>{
const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.1491875&lng=75.7216527&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
const json_data=await data.json();

setRestru(json_data?.data?.cards);
}
return (
//have to change variable in react that i use 
//chabges variable == react kind of varibale 
//react variable == state variable 
//every componebt in react maintain a state (you put varible into that state )
//local variable == create a state 
//state == useState hook to create variable (like let h="text")

//react 
    <>
   <div id="search_bar">
    <input type="text" placeholder="Search" value={searchText} onChange={(e)=>{
      setSearchText(e.target.value);
    }}>
    </input>
    <h1>
      {/* {searchClick} */}
    </h1>
    <button onClick={()=>{
      //filter out the data
     
      const data=filter(searchText,burgerKing);
     
      //update restru
      console.log(data);
      setRestru(data);
    }}>
        Submit
    </button>
    
   </div>

    <div className="resturList"> 

    {
        //spread operator  
    }
         {/* <RestuCard Restu={burgerKing[0]} r={"name"} 
         name={burgerKing[0].name}
         />
         <RestuCard Restu={burgerKing[1]  }  name={burgerKing[1].name}   
         
         
         />   {  }
         <RestuCard Restu={burgerKing[2]}  name={burgerKing[2].name} />
         <RestuCard Restu={burgerKing[3]}  name={burgerKing[3].name}/>

          */}




          {
            //spread operator 
          }
{
 //         <RestuCard  {...burgerKing[0]} />
   //       <RestuCard  {...burgerKing[1]} />
     //     <RestuCard  {...burgerKing[2]} />
       //   <RestuCard  {...burgerKing[3]} />
}


{
    //using map function
    restu.slice(3).map((res)=>{
      console.log(res?.card?.card?.info);
       return <RestuCard  name={res?.card?.card?.info?.name} img={res?.card?.card?.info?.cloudinaryImageId} rating={res?.card?.card?.info?.totalRatingsString}
       time={res?.card?.card?.info?.sla?.slaString}
       cuisines={res?.card?.card?.info?.cuisines}
       />;                                    
    })
}
    </div>
    </>
    
);
}
export default Body;
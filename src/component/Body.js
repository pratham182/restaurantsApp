import RestuCard from "./RestuCard";
import { burgerKing } from "../config";
import { useState } from "react";



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
    restu.map((res)=>{
       return <RestuCard  {... res} />;
    })
}
    </div>
    </>
    
);
}
export default Body;
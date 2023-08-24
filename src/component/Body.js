import RestuCard from "./RestuCard";
import { burgerKing } from "../config";

const Body=()=>(
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
    burgerKing.map((res)=>{
       return <RestuCard  {... res} />;
    })
}
    </div>
    
);

export default Body;
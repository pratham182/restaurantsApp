import react from "react";
import reactdom from "react-dom/client";


const root=reactdom.createRoot(document.getElementById("root"));


/*header
                -logo
                -list
                -cart 
              body
                Search bar 
                Restu list 
                Resy card
                   -image 
                   -name 
                   -Rating 
                   -cuis
                Footer
                -links
                -copyrights
            */
//component

const Title=()=>(
     <div id="logo">

    
     <svg   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.878 5.928a.297.297 0 0 1 .314.335l.003.276c.001.593-.002 1.185.002 1.777c.004.434.08.517.5.57a14.832 14.832 0 0 0 3.148-.046a4.948 4.948 0 0 0 1.573-.374a.507.507 0 0 0 .344-.603a6.831 6.831 0 0 0-5.343-5.71a6.608 6.608 0 0 0-3.648.242a6.718 6.718 0 0 0-2.694 1.752A6.272 6.272 0 0 0 5.23 8.432a11.188 11.188 0 0 0 1.526 5.517a1.342 1.342 0 0 0 1.33.748c.653-.016 1.307-.004 1.96-.004v-.003h2.084c.25 0 .447.06.445.372c-.005.726 0 1.45-.003 2.176c-.002.22-.064.432-.326.434c-.264.002-.327-.209-.33-.43c-.005-.347 0-.694 0-1.041c0-.451-.073-.557-.523-.64a7.702 7.702 0 0 0-2.348-.02a2.596 2.596 0 0 0-.8.196c-.212.1-.296.245-.193.467c.107.231.206.467.333.688a43.875 43.875 0 0 0 3.426 4.956c.154.199.273.203.431.01c.349-.426.715-.839 1.06-1.268a34.226 34.226 0 0 0 3.577-5.26a14.171 14.171 0 0 0 1.494-3.871a1.203 1.203 0 0 0-1.012-1.635a6.943 6.943 0 0 0-1.67-.162c-.909-.006-1.818-.003-2.727-.002c-.245 0-.427-.07-.427-.358c0-1.01-.002-2.022.002-3.033c0-.216.104-.349.339-.34Z"/></svg>
    </div>
)


const Header=()=>(
    <div className="header">
        
        <Title/>
    <div className="nav-links">
    <ul>
        
        <li>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"/></svg> */}
            Home
        </li>
        <li>
            About
        </li>
        <li>
            Contact
        </li>
        <li>Cart</li>
      </ul>
    </div>

</div>
);


//data

const burgerKing=[
    {
        "type": "F",
        "id": "385872",
        "name": "Late Night Burger",
        "uuid": "d69698b7-8b2a-4dbd-a0db-076febe0b62c",
        "img":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/56c9ab92bd79745fd152a30fa2525426",
        "city": "4",
        "area": "Paschim Vihar",
        "totalRatingsString": "10.2",
        "cloudinaryImageId": "sbwuxg2udhfhgacfhdrs",
        "cuisines": [
          "Healthy Food"
        ]
    }, 
    {
        "type": "F",
        "id": "385870",
        "name": "Burger And Sandwich Karol Bagh Wale (TAAL)",
        "uuid": "19bf20d8-aacd-4062-b701-39cd28193cd4",
        "img":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "city": "4",
        "area": "Paschim Vihar",
        "totalRatingsString": "3.1",
        "cloudinaryImageId": "v5wdetfikqatha6c8bxk",
        "cuisines": [
          "Continental",
          "Fast Food"
        ],
},


     {
      "type": "F",
      "id": "416830",
      "name": "Louis Burger",
      "uuid": "f28e29b1-174a-43a9-ac15-4a1be5741e0b",
      "img":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xqcmflozlgx4ulmnsibv",
      "city": "4",
      "area": "Rajouri Garden",
      "totalRatingsString": "7.1",
      "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
      "cuisines": [
        "Burgers",
        "American",
        "Fast Food"
      ],
}, 
     {
      "type": "F",
      "id": "385870",
      "name": "Burger And Sandwich Karol Bagh Wale (TAAL)",
      "uuid": "19bf20d8-aacd-4062-b701-39cd28193cd4",
      "city": "4",
      "area": "Paschim Vihar",
      "img":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/xqcmflozlgx4ulmnsibv",
      "totalRatingsString": "1.2",
      "cloudinaryImageId": "v5wdetfikqatha6c8bxk",
      "cuisines": [
        "Continental",
        "Fast Food"
      ],

    }];


//config driven Ui
//big design architure == system design 

//optional chaining

const RestuCard=({
    name,cuisines,img,totalRatingsString
})=>  {
    
    //const {name,img}=Restu;
    console.log(name);
    return(


    <div className="card">
        {
           // console.log(Restu,r)
            //console.log(props.r)
//            console.log(props.Restu)

        }
{/* {burgerKing.map((ele)=>{
console.log(ele);
}) } 

{
    string interpolation   == that i read  
}
*/}{
//         <img src={} alt="prime pizza">
//         </img>

    
// <h3>
//     {props.Restu.cuisines}  {
//         //doudt
//     }
// </h3>
// <h4>{props.Restu.totalRatingsString}</h4>
}
<img src={img}>
</img>

<h2 >{name}</h2> 

{/* rating */}
<div id="rating">

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
<path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
<defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs>
</svg>
<div>
    {totalRatingsString}
</div>
<ul>
    <li>
        5.8
    </li>
</ul>
</div>


<h4>

    {cuisines}
</h4>

    </div>
)};

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

const Footer=()=>(
    <h4>Footer</h4>
) 
const WholeComponent=()=>(
    <react.Fragment>
     <Header/>
     
    <Body/>
    <Footer/>
    </react.Fragment>
    
)


root.render(<WholeComponent/>);



//any jsx component have one child only

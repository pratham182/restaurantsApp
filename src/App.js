import react from "react";
import reactdom from "react-dom/client";
//Importing 


//importing default importing
import Footer from "./component/Footer";
import Header from "./component/Header";
import Body from "./component/Body";


//importing named import
import { Main_section,Main_section2 } from "./component/Many_comp";

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




const WholeComponent=()=>(
    <react.Fragment>
     <Header/>
     
    <Body/>
    <Footer/>
    <Main_section/>
    <Main_section2/>
    
    </react.Fragment>
    
)


root.render(<WholeComponent/>);



//any jsx component have one child only

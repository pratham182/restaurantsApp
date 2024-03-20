import react, { useState } from "react";
import reactdom from "react-dom/client";
//Importing 


//importing default importing
import Footer from "./component/Footer";
import Header from "./component/Header";
import Body from "./component/Body";

import Child from "./component/Child";

//importing named import
import { Main_section, Main_section2 } from "./component/Many_comp";

const root = reactdom.createRoot(document.getElementById("root"));


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










const WholeComponent = () => {
  const [name] = useState("hello");

  return (

    <react.Fragment>
      <Header />

      <Body />
      <Footer />
      <Main_section />
      <Main_section2 />
     
     
    </react.Fragment>

  )
}


root.render(<WholeComponent />);



//any jsx component have one child only

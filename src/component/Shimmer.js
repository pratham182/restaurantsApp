import { Shimmer ,Image} from "react-shimmer";

const Shimmer=()=>{

    return(
       <>
      
      <Image
        src='https://source.unsplash.com/random/800x600'
        fallback={<Shimmer width={800} height={600} />}
      />
        
       </>
        
    )
}
export default Shimmer;
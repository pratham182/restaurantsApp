import React, { useState } from "react";


const Child = ({ name }) => {
    const [namee, changeName] = useState("");
    const [valuee, change] = useState(true);
    return (
        <>
            <input type="text" value={namee} onChange={(e) => {
                changeName(e.target.value);

            }} />
            <div>
                {namee}
            </div>


            <h2>
                {valuee}
            </h2>

            <button onClick={() => {
                if (valuee == "true") {
                    change("false");
                } else {
                    change("true");
                }

            }}>
                OK

            </button>
        </>
    )
}


export default Child;
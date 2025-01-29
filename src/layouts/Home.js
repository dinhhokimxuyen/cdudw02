import React from "react";
import Slider from "../pages/home/Slider";
import Deal from "../pages/home/Deal";
import Apparel from "../pages/home/Apparel";

function Home(props){
    return (
        <div className="container">
            <Slider />
            <Deal/>
            <Apparel />
        </div>
    );
}
export default Home;
// =================================
//  IMPORTS
// =================================
import { useNavigate } from "react-router-dom";

import HomeBg from "./../images/desktop/home/bg/home-bg.jpg";
import HomeMap from "./../images/desktop/home/map/home-map.jpg";
import MasterScreen from "./../images/desktop/home/master/body/dm-screen.png";
import MasterFace from "./../images/desktop/home/master/body/dm-face.png";

// =================================
//  COMPONENT
// =================================
export default function HomePage() {
    // =================================
    //  CONSTS
    // =================================
    const navigate = useNavigate();

    // =================================
    //  RENDER
    // =================================
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* BG */}
            <img
                src={HomeBg}
                className="absolute inset-0 w-full h-full object-cover"
                alt="HomePage Bg image"
            />

          {/* Group Master's Face + Screen + Map */}
<div className="absolute bottom-0 left-0 w-full flex flex-col items-center">
    <img
        src={MasterFace}
        className="w-1/6 object-contain -mb-22"
        alt="Master face"
    />
    <img
        src={MasterScreen}
        className="w-1/3 object-contain"
        alt="Master screen"
    />
    <img
        src={HomeMap}
        className="w-full object-contain border-t-5 border-taupe-600 -mt-8"
        alt="HomePage Map"
    />
</div>
        </div>
    );
}
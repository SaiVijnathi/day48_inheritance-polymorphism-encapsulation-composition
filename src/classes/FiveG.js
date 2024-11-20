import FourG from "./FourG";

class FiveG extends FourG{
    constructor(){
        super();
        console.log("Inside 5G constructor");
    }

    speed = ()=>{
        console.log("5G - Provides significantly higher speeds, up to 10 Gbps (100x faster than 4G in ideal conditions).");
    }

    Latency = ()=>{
        console.log("5G - Reduces latency to as low as 1 millisecond.");
    }

    Energy_Efficiency = ()=>{
        console.log("5G - Designed to be more energy-efficient, reducing power consumption per bit.");
    }

    Coverage = ()=>{
        console.log("5G - High-band frequencies (mmWave) have limited range and poor penetration but can deliver ultra-high speeds.");
    }
}

export default FiveG;
class FourG{
    constructor(){
        console.log("4G - Inside 4G constructor");
    }

    speed = ()=>{
        console.log("4G - Offers download speeds up to 100 Mbps under optimal conditions.");
    }

    Latency = ()=>{
        console.log("4G - Latency (response time) is around 30–50 milliseconds.");
    }

    Energy_Efficiency = ()=>{
        console.log("4G - Consumes more energy per bit of data transferred.");
    }

    Coverage = ()=>{
        console.log("4G - Better range and penetration through walls and obstacles.");
    }
}

export default FourG;
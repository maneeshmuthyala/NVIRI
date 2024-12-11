import React from 'react';
import Bookrequest from '../Bookrequest'
import './index.css'
import Technicians from '../Technicians'
const appliances = 
[
    {
        id: 1,
        imgSrc:"https://res.cloudinary.com/dvmcsww2y/image/upload/v1733736983/refrigerator-thin_1_otnpmv.png",
        head: "Fridge",
        description: "We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.",
    },
    {
        id: 2,
        imgSrc:"https://res.cloudinary.com/dvmcsww2y/image/upload/v1733736983/Vector_dvhoxm.png",
        head: "Airconditiner",
        description: "Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.",
    },
    {
        id: 3,
        imgSrc:"https://res.cloudinary.com/dvmcsww2y/image/upload/v1733736982/Vector_1_mfm6o0.png",
        head: "Television",
        description: "What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.",
    },
    {
        id: 4,
        imgSrc:"https://res.cloudinary.com/dvmcsww2y/image/upload/v1733736982/fire-burner-thin_1_gse45t.png",
        head: "Gas stove",
        description: "We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.",
    },
    {
        id: 5,
        imgSrc:"https://res.cloudinary.com/dvmcsww2y/image/upload/v1733736983/Vector_dvhoxm.png",
        head: "Airconditiner",
        description: "Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.",
    },
    {
        id: 6,
        imgSrc:"https://res.cloudinary.com/dvmcsww2y/image/upload/v1733736982/Vector_1_mfm6o0.png",
        head: "Television",
        description: "What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.",
    },
]

const Services = ()=>{
    return(
        <div className="serve-container">
        <h1>All Services</h1>
        <p>The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
        <div className="appliances-cont">
        {
           appliances.map(each=>(
            <div className="appliance-cont">
                <img src={each.imgSrc} alt={each.head}/>
                <h1 className="appliance-head">{each.head}</h1>
                <p className="appliance-desc">{each.description}</p>
                </div>
           ))
        }
        </div>
      <Bookrequest/>
       <Technicians/>
        </div>
    )

} 
export default Services
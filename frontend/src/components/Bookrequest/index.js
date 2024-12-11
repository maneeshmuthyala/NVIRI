import React,{Component} from 'react';
import './index.css'

const steps = [
    {
        id:1,
        imgSrc: "https://res.cloudinary.com/dvmcsww2y/image/upload/v1733738461/undraw_forms_re_pkrt_1_ezplko.png",
        head: "Provide Your appliancs details",
        descriprion:"Let us know your appliance details and your issue.",
    },
    {
        id:2,
        imgSrc: "https://res.cloudinary.com/dvmcsww2y/image/upload/v1733738461/Untitled_wocygv.png",
        head: "Choose Your Technician",
        descriprion:"Choose from a wide variety of technicians and vendors.",
    },
    {
        id:3,
        imgSrc: "https://res.cloudinary.com/dvmcsww2y/image/upload/v1733738461/undraw_certification_re_ifll_1_e9x5gh.png",
        head: "Get Fixed",
        descriprion:"The technician will arrive at your doorstep shortly to fix it!",
    },
    
]
class Bookrequest extends Component{
    render(){
        return(
            <div>
            <h1>Book a request in 3 simple steps</h1>
           <ul className="book-cont">
        {
            steps.map(each=>(
                <li key={each.id} className="book-item">
                    <img src={each.imgSrc} className="img" alt={each.head}/>
                    <h1 className="header">{each.head}</h1>
                    <p className="book-desc">{each.descriprion}</p>
                    </li>
            ))
        }
           </ul>
           </div>
        )
    }
}
export default Bookrequest
import React from 'react'

import "../css/cards.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Hobbies = [
    { id: 1, name: "Football", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
    { id: 2, name: "Kabaddi", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
    { id: 3, name: "Chess", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Indoor", rateIcon: faStar, ratePoint: 4 },
    { id: 4, name: "Badminton", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
    { id: 5, name: "Volley Ball", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 3 },
    { id: 6, name: "Cricket", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 2 },
]


function Cards(props) {
    return (
        <>
            <div key={props.hobbyId} className="col-lg-4 col-md-6">
                <div className="cards-tab">
                    <div className="cards-tab-img">
                        <img
                            src={props.hobbyImg}
                            alt="err_loading"
                        />
                    </div>
                    <div className="cards-para">
                        <span>{props.hobbyType}</span>
                        <span>
                            {Array.from({ length: props.hobbyRatePoint }).map((_, i) => <FontAwesomeIcon key={props.hobbyId} icon={props.hobbyRateIcon} style={{ color: "#f9004d" }} />)}
                            {Array.from({ length: 5 - props.hobbyRatePoint }).map((_, i) => <FontAwesomeIcon key={props.hobbyId} icon={props.hobbyRateIcon} style={{ color: "grey" }} />)}
                        </span>
                    </div>
                    <div className="cards-bottom">
                        <p>{props.hobbyName}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;

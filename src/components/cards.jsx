import React from 'react'

import "../css/cards.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faStar } from "@fortawesome/free-solid-svg-icons";
// const Hobbies = [
//     { id: 1, name: "Football", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
//     { id: 2, name: "Kabaddi", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
//     { id: 3, name: "Chess", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Indoor", rateIcon: faStar, ratePoint: 4 },
//     { id: 4, name: "Badminton", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
//     { id: 5, name: "Volley Ball", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 3 },
//     { id: 6, name: "Cricket", img: "https://rainbowit.net/html/inbio/assets/images/blog/blog-01.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 2 },
// ]


function Cards(props) {
    return (
        <>
            <div key={props.hobbyId} className="col-lg-4 col-md-6">
                <div className="cards-tab p-3 shadow-sm rounded rounded-3 mb-4">
                    <div className="cards-tab-img overflow-hidden mb-3 rounded-3">
                        <img className='w-100 img-fluid' src={props.hobbyImg} alt="err_loading" />
                    </div>
                    <div className="cards-para">
                        <p className="text-pink">{props.hobbyType}</p>
                        <span>
                            {Array.from({ length: props.hobbyRatePoint }).map((_, i) => <FontAwesomeIcon key={props.hobbyId} icon={props.hobbyRateIcon} style={{ color: "#f9004d" }} />)}
                            {Array.from({ length: 5 - props.hobbyRatePoint }).map((_, i) => <FontAwesomeIcon key={props.hobbyId} icon={props.hobbyRateIcon} style={{ color: "grey" }} />)}
                        </span>
                    </div>
                    <h2 className='mb-0 h6 fw-bold text-center'>{props.hobbyName}</h2>
                </div>
            </div>
        </>
    )
}

export default Cards;

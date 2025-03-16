import React from 'react'
import Cards from './cards'

import { faStar } from "@fortawesome/free-solid-svg-icons";

const Hobbies = [
    { id: 1, name: "Varanasi", img: "/images/travel.webp", type: "₹ 650/-", rateIcon: faStar, ratePoint: 4 },
    { id: 2, name: "Agra", img: "/images/travel.webp", type: "₹ 750/-", rateIcon: faStar, ratePoint: 3 },
    { id: 3, name: "Uttarakhand", img: "/images/travel.webp", type: "₹ 5,500/-", rateIcon: faStar, ratePoint: 5 },
    { id: 4, name: "Lucknow", img: "/images/travel.webp", type: "₹ 750/-", rateIcon: faStar, ratePoint: 4 },
    { id: 5, name: "Prayagraj", img: "/images/travel.webp", type: "₹ 350/-", rateIcon: faStar, ratePoint: 3 },
    { id: 6, name: "Mathura", img: "/images/travel.webp", type: "₹ 2,500/-", rateIcon: faStar, ratePoint: 4 },
]

function Sports() {
    return (
        <div className="cards-page">
            <div className="row">
                {Hobbies.map((hobby) => <Cards key={hobby.id} hobbyId={hobby.id} hobbyName={hobby.name} hobbyImg={hobby.img} hobbyType={hobby.type} hobbyRateIcon={hobby.rateIcon} hobbyRatePoint={hobby.ratePoint} />
                )}
            </div>
        </div>
    )
}

export default Sports

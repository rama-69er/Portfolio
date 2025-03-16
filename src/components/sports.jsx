import React from 'react'
import Cards from './cards'

import { faStar } from "@fortawesome/free-solid-svg-icons";

const Hobbies = [
    { id: 1, name: "Football", img: "/images/sports.webp", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
    { id: 2, name: "Kabaddi", img: "/images/sports.webp", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
    { id: 3, name: "Chess", img: "/images/sports.webp", type: "Indoor", rateIcon: faStar, ratePoint: 4 },
    { id: 4, name: "Badminton", img: "/images/sports.webp", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
    { id: 5, name: "Volley Ball", img: "/images/sports.webp", type: "Outdoor", rateIcon: faStar, ratePoint: 3 },
    { id: 6, name: "Cricket", img: "/images/sports.webp", type: "Outdoor", rateIcon: faStar, ratePoint: 2 },
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

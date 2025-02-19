import React from 'react'
import Cards from './cards'

import { faStar } from "@fortawesome/free-solid-svg-icons";

const Hobbies = [
    { id: 1, name: "The Secret Annex", img: "/images/books.avif", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
    { id: 2, name: "Train to Pakistan", img: "/images/books.avif", type: "Outdoor", rateIcon: faStar, ratePoint: 2 },
    { id: 3, name: "Half Girlfriend", img: "/images/books.avif", type: "Indoor", rateIcon: faStar, ratePoint: 3 },
    { id: 4, name: "The girl in room 105", img: "/images/books.avif", type: "Outdoor", rateIcon: faStar, ratePoint: 3 },
    { id: 5, name: "You are the best wife", img: "/images/books.avif", type: "Outdoor", rateIcon: faStar, ratePoint: 5 },
    { id: 6, name: "Revolution Twenty20", img: "/images/books.avif", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
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

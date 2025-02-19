import React from 'react'
import Cards from './cards'

import { faStar } from "@fortawesome/free-solid-svg-icons";

const Hobbies = [
  { id: 1, name: "Biryani", img: "/images/cooking.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
  { id: 2, name: "Kabab", img: "/images/cooking.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
  { id: 3, name: "Matar Paneer", img: "/images/cooking.jpg", type: "Indoor", rateIcon: faStar, ratePoint: 4 },
  { id: 4, name: "Chukauni", img: "/images/cooking.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 4 },
  { id: 5, name: "Shimla Mirch Payaz Masala", img: "/images/cooking.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 3 },
  { id: 6, name: "Chicken Curry", img: "/images/cooking.jpg", type: "Outdoor", rateIcon: faStar, ratePoint: 2 },
]

function Cooking() {
  return (
    <div className="cards-page">
      <div className="row">

        {Hobbies.map((hobby) => <Cards key={hobby.id} hobbyId={hobby.id} hobbyName={hobby.name} hobbyImg={hobby.img} hobbyType={hobby.type} hobbyRateIcon={hobby.rateIcon} hobbyRatePoint={hobby.ratePoint} />
        )}
      </div>
    </div>
  )
}

export default Cooking;

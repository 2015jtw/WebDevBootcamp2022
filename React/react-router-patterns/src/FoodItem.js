import React from 'react';
import { useParams } from 'react-router-dom';

function FoodItem() {
    const { foodName, drinkName } = useParams();

    const foodUrl = `https://source.unsplash.com/featured?${foodName}`;
    const drinkUrl = `https://source.unsplash.com/featured?${drinkName}`;

    return (
        <div>
            <h1>I Love to Eat {foodName}</h1>
            <img src={foodUrl} alt={foodName} />
            <h1>I Love to Drink {drinkName}</h1>
            <img src={drinkUrl} alt={drinkName} />
        </div>
    )
}

export default FoodItem;

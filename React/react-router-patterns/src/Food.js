import React, { Component } from 'react';
import { useParams } from "react-router-dom";


function Food() {
    const { name } = useParams();
    const foodUrl = `https://source.unsplash.com/featured?${name}`;

    return (
        <div>
            <h1>I Love to Eat {name}</h1>

            <img src={foodUrl} alt={name} />
        </div>
    );
}

export default Food;
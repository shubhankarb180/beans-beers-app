import React, { useState, useEffect } from 'react';

import './BeerContainer.styles.scss';
import starUnfilled from './../../assets/starUnfilled.png';
import starFilled from './../../assets/starFilled.png';

export default function BeerContainer({ beerData, addBeer, favBeerList }) {

    const checkFavIcon = (id) => {
        if (favBeerList.length) {
            return favBeerList.reduce(
                (a, v) => (v.id === id ? true : a),
                null,
            );
        }
    }


    return (
        <div className='beer-container'>
            {
                beerData.map((beer) =>
                    <div className='beer-card' key={beer.id}>
                        <div className="beer-avatar">
                            <img className='beer-avatar--image' src={beer.image_url} alt="avatar" />
                        </div>
                        <div className="beer-info">
                            {
                                checkFavIcon(beer.id) ?
                                    <button className='favIconButton'>
                                        <img className="favIcon" src={starFilled} alt='favicon' id={beer.id} />
                                    </button> :
                                    <button className='favIconButton' onClick={() => addBeer(beer.id)}>
                                        <img className="favIcon" src={starUnfilled} alt='favicon' id={beer.id} />
                                    </button>
                            }
                            <h4 className='beer-info--name'>{beer.name}</h4>
                            <p className='beer-info--description'>{beer.description.slice(0, 100)}</p>
                        </div>
                    </div>)
            }
        </div>
    );
}
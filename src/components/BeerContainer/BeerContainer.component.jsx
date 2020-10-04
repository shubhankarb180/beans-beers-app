import React, {useState, useEffect} from 'react';

import './BeerContainer.styles.scss';
import starUnfilled from './../../assets/starUnfilled.png';
import starFilled from './../../assets/starUnfilled.png';

export default function BeerContainer({ beerData, addBeer }) {

    const [star, setStar] = useState();

    function checkFav() {
        let check = false;
        let decision = check === true ? starFilled : starUnfilled;
        setStar(decision);
    }

    useEffect(() => {
        checkFav()
    },[]); 

    return(
        <div className='beer-container'>
            {
                beerData.map((beer) => 
                <div className='beer-card' key={beer.id}>
                    <div className="beer-avatar">
                        <img className='beer-avatar--image' src={beer.image_url} alt="avatar" />
                    </div>
                    <div className="beer-info">
                        <button className='favIconButton' onClick={() => addBeer(beer.id)}>
                            <img className="favIcon" src={star} alt='favicon' id={beer.id}/>
                        </button>
                        <h4 className='beer-info--name'>{beer.name}</h4>
                        <p className='beer-info--description'>{beer.description.slice(0,100)}</p>
                    </div>
                </div>)
            }
        </div>
    );
}
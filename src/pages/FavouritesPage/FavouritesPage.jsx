import React, { useState, useEffect } from 'react';

export default function FavouritesPage(){

    const[favouriteBeers, setfavouriteBeers] = useState([]);

    function fetchFavBeerList(){
        const localData = JSON.parse(localStorage.getItem('favouriteBeer'));
        if(localData && localData.length){
            setfavouriteBeers(localData);
        }
        else {
            setfavouriteBeers([]);
        }
    }

    useEffect(() => {
        fetchFavBeerList()
    },[favouriteBeers]);

    function deleteBeer(id) {
        let newData = favouriteBeers;
        newData.map((data) => {
            if(data.id === id){
                data.splice(id,1);
            }
        });
        setfavouriteBeers(newData);
        localStorage.setItem('favouriteBeer',JSON.stringify(favouriteBeers));
    }

    return(
        <div>
            {
                favouriteBeers.map((beer) => 
                    <div key={beer.id}>
                        <h3>{beer.name}</h3>
                        <p>{beer.description}</p>
                        <button onClick={() => deleteBeer(beer.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    );
};
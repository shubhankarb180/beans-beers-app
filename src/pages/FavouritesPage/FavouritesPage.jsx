import React, { useState} from 'react';

export default function FavouritesPage(){

    const[favouriteBeers, setfavouriteBeers] = useState(localStorage.getItem('favouriteBeer') ? JSON.parse(localStorage.getItem('favouriteBeer')) : []);

    function deleteBeer(id) {
        let favBeers = favouriteBeers;
        favBeers.map((data) => {
            if(data.id === id){
                favBeers.splice(data,1);
            }
        });
        setfavouriteBeers(favBeers);
        localStorage.setItem('favouriteBeer',JSON.stringify(favouriteBeers));
        console.log(favouriteBeers);
    }

    if( favouriteBeers) {
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
    }
    else{
        return(<h1>No Favourite Beer</h1>);
    }
};
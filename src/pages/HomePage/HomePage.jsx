import React, {useState, useEffect} from 'react';

import './HomePage.styles.scss';
import SearchBox from '../../components/Search/searchbox.component';
import BeerContainer from '../../components/BeerContainer/BeerContainer.component';

export default function HomePage(){

    //Intializing state variable for saving beer data
    const [ beerData, setbeerData] = useState([]);
    const [ searchtext, setSearchtext] = useState("");
    const [ favBeer, setFavBeer] = useState([]);

    //Asynchronous function for fetching beer data using fetch 
    async function fetchData(page=1) {
        try {
            let apiCall = null;
            if(searchtext === ""){
                apiCall = await fetch(`https://api.punkapi.com/v2/beers?${page}&per_page=24`);
            }
            else {
                apiCall = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchtext}&per_page=24`);
            }
            const beers = await apiCall.json();
            setbeerData(beers);
        }
        catch(err){
            console.log("Error Message : " + err);
        }
    };

    // get the localStorage data
    let localData = null;
    if(favBeer.length < 1){
        localData = JSON.parse(localStorage.getItem('favouriteBeer'));
    }

    //In case favBeer array already has values in local storage then fetch that array and save in state so that they can be upadte in elements
    if(localData && localData.length){
        setFavBeer(localData);
        console.log(favBeer);
    }

    //Beer Search Handler
    function handleBeerSearch(filter) {
        setSearchtext(filter);
    }
    

    //Adds beer in the favBeer list and updated the same in the local storage
    function addBeer(id){
        beerData.map(beer => {
            if(beer.id === id){
                favBeer.push(beer);
            }
            return favBeer;
        });
        localStorage.setItem('favouriteBeer', JSON.stringify(favBeer));
        console.log(favBeer);
    }

    //Function Call for fetching data via useEffect
    useEffect(() => {
        fetchData()
    },[searchtext]);

    return(
        <div className='page-content'>
            <SearchBox handleBeerSearch={handleBeerSearch} />
            { beerData.length < 1 ? <div><h1>No Data found</h1></div> : <BeerContainer beerData={beerData} addBeer={addBeer} /> }
        </div>
    );
};
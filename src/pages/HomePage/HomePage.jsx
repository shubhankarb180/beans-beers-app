import React, {useState, useEffect} from 'react';

import './HomePage.styles.scss';
import {Empty} from 'antd';
import SearchBox from '../../components/Search/searchbox.component';
import BeerContainer from '../../components/BeerContainer/BeerContainer.component';
import Loading from '../../components/Loading/Loading.component';

import starUnfilled from './../../assets/starUnfilled.png';
import starFilled from './../../assets/starUnfilled.png';

export default function HomePage(){

    const [ beerData, setbeerData] = useState([]);
    const [ searchtext, setSearchtext] = useState("");
    const [favBeer, setFavBeer] = useState(localStorage.getItem('favouriteBeer') ? JSON.parse(localStorage.getItem('favouriteBeer')) : []);
    const [ page , setPage ] = useState(1);
    
    async function fetchData() {
            let apiCall = null;
            if(searchtext === "" && page){
                apiCall = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=24`);
            }
            else {
                apiCall = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchtext}&page=${page}&per_page=24`);
            }
            const beers = await apiCall.json();
            setbeerData(beers);
    };

    function checkForExisitingBeerInFav(id) {
        if (favBeer.length) {
            return favBeer.reduce(
                (a, v) => (v.id === id ? true : a),
                null,
            );
        }
    }

    
    function handleBeerSearch(filter) {
        setSearchtext(filter);
        setPage(1);
    }

    function pageCounter(decision){
        if(beerData.length > 23){
            if (decision === true){
                setPage(page + 1);
            }
            else{
                setPage(page - 1);
            }
        }     
    }
    


    function addBeer(id){
        if (!checkForExisitingBeerInFav(id)) {
            beerData.map(beer => {
                if (beer.id === id) {
                    favBeer.push(beer);
                }
                return favBeer;
            });
            setFavBeer([...favBeer]);
            localStorage.setItem('favouriteBeer', JSON.stringify(favBeer)); 
            return String(starFilled);

        } else {
            beerData.map(beer => {
                if (beer.id === id) {
                    favBeer.splice(beer,1);
                }
                return favBeer;
            });
            setFavBeer([...favBeer]);
            localStorage.setItem('favouriteBeer', JSON.stringify(favBeer)); 
            return String(starUnfilled);
        }
    }

    
    useEffect(() => {
        fetchData()
    },[searchtext,page]);

    return(
        <div className='page-content'>
            <SearchBox handleBeerSearch={handleBeerSearch} />
            { beerData.length < 1 && searchtext !== "" ? <Empty /> : beerData.length < 1 ? <Loading /> :
                <BeerContainer 
                    beerData={[...beerData]} 
                    addBeer={addBeer} f
                    favBeerList={favBeer}
                    pageCounter={pageCounter}
                    page={page}
                /> }
        </div>
    );
};
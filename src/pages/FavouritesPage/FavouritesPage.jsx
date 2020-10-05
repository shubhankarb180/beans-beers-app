import React, { useState} from 'react';

import {Row, Col, Button} from 'antd';

export default function FavouritesPage(){

    const[favouriteBeers, setfavouriteBeers] = useState(localStorage.getItem('favouriteBeer') ? JSON.parse(localStorage.getItem('favouriteBeer')) : []);

    function deleteBeer(id) {
        let favBeers = favouriteBeers;
        favBeers.map((data) => {
            if(data.id === id){
                favBeers.splice(data,1);
            }
            return favBeers;
        });
        setfavouriteBeers([...favBeers]);
        localStorage.setItem('favouriteBeer',JSON.stringify(favouriteBeers));
        console.log(favouriteBeers);
    }
    return(
        // <div className='beer-container'>
        //     {
        //         favouriteBeers.map((beer) =>
        //             <div className='beer-card' key={beer.id}>
        //                 <div className="beer-avatar">
        //                     <img className='beer-avatar--image' src={beer.image_url} alt="avatar" />
        //                 </div>
        //                 <div className="beer-info">
        //                     <h4 className='beer-info--name'>{beer.name}</h4>
        //                     <p className='beer-info--description'>{beer.description.slice(0, 100)}</p>
        //                     <Button type="primary" danger onClick={()=> deleteBeer(beer.id)}>
        //                         Delete
        //                     </Button>
        //                 </div>
        //             </div>)
        //     }
        // </div>

        <div>
            <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16 }}>
            {
                favouriteBeers.map((beer) =>
                    <Col className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={8}>
                        <div className='beer-card' key={beer.id}>
                            <div className="beer-avatar">
                                <img className='beer-avatar--image' src={beer.image_url} alt="avatar" />
                            </div>
                            <div className="beer-info">
                                <h4 className='beer-info--name'>{beer.name}</h4>
                                <p className='beer-info--description'>{beer.description.slice(0, 100)}</p>
                                <Button type='primary' danger onClick={() => deleteBeer(beer.id)}>Delete Item</Button>
                            </div>
                        </div>
                    </Col>
                )
            }
        </Row>
        </div>

        
    );
    
    
};
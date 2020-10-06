import React from 'react';
import { Row, Col, Button } from 'antd';
import './BeerContainer.styles.scss';
import starUnfilled from './../../assets/starUnfilled.png';
import starFilled from './../../assets/starFilled.png';

export default function BeerContainer({ beerData, addBeer, favBeerList, pageCounter, page }) {
    const checkFavIcon = (id) => {
        if (favBeerList.length) {
            return favBeerList.reduce(
                (a, v) => (v.id === id ? true : a),
                null,
            );
        }
    }


    return (
        <div>
            {
                <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16 }}>
                    {
                        beerData.map((beer) =>
                            <Col key={beer.id} className="gutter-row" xs={24} sm={24} md={24} lg={24} xl={8}>
                                <div className='beer-card' key={beer.id}>
                                    <div className="beer-avatar">
                                        <img className='beer-avatar--image' src={beer.image_url} alt="avatar" />
                                    </div>
                                    <div className="beer-info">
                                        {
                                            checkFavIcon(beer.id) ?
                                                <button className='favIconButton' onClick={() => addBeer(beer.id)}>
                                                    <img className="favIcon" src={starFilled} alt='favicon' id={beer.id} />
                                                </button> :
                                                <button className='favIconButton' onClick={() => addBeer(beer.id)}>
                                                    <img className="favIcon" src={starUnfilled} alt='favicon' id={beer.id} />
                                                </button>
                                        }
                                        <h4 className='beer-info--name'>{beer.name}</h4>
                                        <p className='beer-info--description'>{beer.description.slice(0, 100)}</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            }
            {
                beerData.length < 24 ? '' :
                    <div className='pagination-buttons'>
                        { page === 1 ? null: <Button type='primary' onClick={() => pageCounter(false)}>Prev</Button>}
                        <Button type='primary' onClick={() => pageCounter(true)}>Next</Button>
                    </div>
            }
        </div>
    );
}
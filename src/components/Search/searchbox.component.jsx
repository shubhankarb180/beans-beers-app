import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './searchbox.styles.scss';

const { Search } = Input;

export default function SearchBox({handleBeerSearch}) {
    return(
        <div className='beer-search'>
            <Search
                placeholder="Search beer"
                enterButton="Search"
                size="large"
                onSearch={(event => handleBeerSearch(event))}
            />
        </div>
        
    );
}
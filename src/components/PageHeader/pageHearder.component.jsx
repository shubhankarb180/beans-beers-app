import React from 'react';

import './pageHeader.styles.scss';
import "antd/dist/antd.css";

import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

export default function PageHeader(){ 
    return(
        <Header className='page-header'>
            <div className="page-header--title">Beans Loves Beers</div>
            <div className="page-header--links">
                <Menu className='bg-menu' theme='light' mode='horizontal'>
                    <Menu.Item key='home'><Link to='/'>Home</Link></Menu.Item>
                    <Menu.Item key='fav'>Favourites<Link to='/favourites'></Link></Menu.Item>
                </Menu>
            </div>
        </Header>
    );
}
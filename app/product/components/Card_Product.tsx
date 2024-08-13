// @flow
import * as React from 'react';
import ProductItems from './Item_Product.tsx';

import './style.css';


const dataProducts = [
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    },
    {
        title:'Thinkpad latop original',
        price:'Rp. 100.000.00',
        price_old:'Rp. 100.000.00',
        thumbnail:'/samplelaptop.png',
        rating_point:'4.6',
        sellout:'1Rb',
        market:{
            address:'/market/alexandria_store',
            name:'Alexandria Store'
        },
        product_link:'/market/details/product_id'
    }
];

type Props = {};

export default function _CardProduct(props: Props) {
    return (
        <div style={{
            padding:'20px 0',
            borderTop:'1px solid',
            borderBottom:'1px solid',
            margin:'20px 0'
        }}>
            <div style={{
                display:'flex',
                fontWeight:'bold',
                justifyContent:'space-between'
            }}>
                <div>Barang Populer</div>
                <div>
                    <a href="/products">
                        Lihat Semua Barang >>
                    </a>
                </div>
            </div>
            <div className="products_container">
            {
                dataProducts.map((item,index)=>(
                    <ProductItems
                        title={item.title}
                        price={item.price}
                        price_old={item.price_old}
                        thumbnail={item.thumbnail}
                        sellout={item.sellout}
                        rating_point={item.rating_point}
                        market={item.market}
                        product_link={item.product_link}
                    />
                ))
            }
            </div>
        </div>
    );
}
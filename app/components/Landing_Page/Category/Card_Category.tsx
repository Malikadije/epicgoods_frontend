// @flow
import * as React from 'react';

import './style.css';

type Props = {};

const dataKategories = [
    {label:'Laptop',thumbnail:'/samplelaptop.png'},
    {label:'Laptop',thumbnail:'/samplelaptop.png'},
    {label:'Laptop',thumbnail:'/samplelaptop.png'},
    {label:'Laptop',thumbnail:'/samplelaptop.png'},
    {label:'Laptop',thumbnail:'/samplelaptop.png'}
];

export default function RekomKategories(props: Props) {
    return (
        <div className="boxContainer">
            <div style={{fontWeight:'bold',display:'flex',justifyContent:'space-between'}} >
                <div>
                    Rekomendasi Kategori
                </div>
                <div>
                    <a href="/allcategories">
                        Lihat Semua Kategori>>
                    </a>
                </div>
            </div>
            <div style={{padding:'20px',display:'flex',gap:'10px',justifyContent:'space-around',fontWeight:'bold',overflow:'auto'}}>
                {
                    dataKategories.map((item,index)=>(
                        <a href="/category/">
                            <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                                <div style={{width:'150px',height:'150px',background:'whitesmoke',borderRadius:'50%'}}>
                                    <img src={item.thumbnail} className="fitImage"/>
                                </div>
                                <div>
                                    <span>{item.label}</span>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}
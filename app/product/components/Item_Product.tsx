// @flow
import * as React from 'react';
import './style.css';
type Props = {};

export default function _ItemProduct(props: Props) {
    return (
        <div style={{background:'whitesmoke',borderRadius:'10px',display:'flex',flexDirection:'column',alingItem:'center',width:'200px'}}>
            <div style={{
                width:'100%',
                height:'200px',
                borderRadius:'10px'
            }}>
                <img src={props.thumbnail} className="fitImage"/>
            </div>
            <div className="details_container">
                <div className="product_title">
                    <a href={props.product_link}>
                        {props.title}
                    </a>
                </div>
                <div className="product_price">
                    <div className="price">{props.price}</div>
                    <div className="price_old sliced-content"><s>{props.price_old}</s></div>
                </div>
                <div className="product_rating">
                    <div className="star">
                        <img src="/star.png" className="fitImage" />
                    </div>
                    <div className="rating_point">{props.rating_point}</div>
                    <div className="dot"></div>
                    <div className="sellout">{props.sellout}+ Terjual</div>
                </div>
                <div className="product_store">
                    <div className="market">
                        <img src="/market.png" className="fitImage"/>
                    </div>
                    <div>
                        <a href={props.market.address}>
                            {props.market.name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
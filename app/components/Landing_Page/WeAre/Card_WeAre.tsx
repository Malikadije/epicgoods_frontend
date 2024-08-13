// @flow
import * as React from 'react';

type Props = {};

export default function _CardWeAre(props: Props) {
    return (
        <div style={{margin:'20px 0', paddingBottom:'30px',borderBottom:'1px solid'}}>
            <div className="biglabel" style={{textAlign:'center',marginBottom:'20px'}}>Kenapa Harus Epic Goods?</div>
            <div style={{
                display:'flex',
                gap:'10px',
            }} className="flex_wrapp">
                {
                    props.whyWeAre.map((item,index)=>(
                        <div style={{
                            width:'100%',
                            height:'300px',
                            position:'relative'
                        }}>
                            <div style={{
                                width:'100%',
                                height:'100%'
                            }}>
                                <img src={item.background_image} className="fitImage" />
                            </div>
                            <div style={{
                                position:'absolute',
                                top:0,
                                left:0,
                                background:'#00000052',
                                width:'100%',
                                height:'100%',
                                color:'white',
                                fontWeight:'bold',
                                display:'flex',
                                alignItems:'flex-end'
                            }}>
                                <div style={{padding:'10px',fontSize:'24px'}}>{item.label}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
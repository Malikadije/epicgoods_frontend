// @flow
import * as React from 'react';
import './style.css';

type Props = {};
export default function Page(props: Props) {
    return (
        <form>
            <div style={{ 
                position:'absolute', top:0, left:0, width:'100%', height:'100%', background:'#ffe6a2',
                display:'flex', justifyContent:'flex-start',alignItems:'center',flexDirection:'column',
                gap:'20px', overflow:'auto'
            }} >
                <div style={{
                    position:'fixed',
                    bottom:0,
                    left:0,
                    height:'100%'
                }} >
                    <img src="/momcarting.png" className="fitImage" />
                </div>
                <div style={{marginTop:'100px', zIndex:1}} >
                    <img src="/logo.png"
                        style={{
                            width:'160px'
                        }}
                    />
                </div>
                <div className="container"  style={{
                    background:'white',
                    borderRadius:'10px',
                    boxShadow:'0 0 5px 5px #0000001c',
                    marginBottom:'100px'
                }}>
                    <div style={{textAlign:'center', marginBottom:'32px'}} >
                        <div style={{fontWeight:'bold', fontSize:'18px', marginBottom:'5px'}} >Masuk</div>
                        <div style={{display:'flex',gap:'2px',justifyContent:'center', fontSize:'12px'}} >
                            <span>Belum punya akun Epic Goods?</span>
                            <span>
                                <a href="/auth/register" style={{color:'blue', fontWeight:'bold'}} >Daftar</a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom:'10px'}} >
                            <div style={{marginBottom:'5px'}} >Email</div>
                            <div>
                                <input placeholder="e.g johndoe@gmail.com" tyle="email" style={{
                                    border:'1px solid gainsboro',
                                    padding:'10px',
                                    width:'100%',
                                    borderRadius:'8px'
                                }} name="email" />
                            </div>
                        </div>
                        <div style={{marginBottom:'15px'}} >
                            <div style={{marginBottom:'5px'}} >Password</div>
                            <div>
                                <input placeholder="**************" type="password" style={{
                                    border:'1px solid gainsboro',
                                    padding:'10px',
                                    width:'100%',
                                    borderRadius:'8px'
                                }} name="password" />
                            </div>
                        </div>
                        <div>
                            <button style={{
                                padding:'10px',
                                background:'whitesmoke',
                                width:'100%',
                                borderRadius:'5px',
                                color:'gray',
                                fontWeight:'bold',
                                border:'1px solid gainsboro'
                            }} >Masuk</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};
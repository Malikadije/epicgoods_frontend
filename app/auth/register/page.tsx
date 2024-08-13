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
                    right:0,
                    height:'100%'
                }} >
                    <img src="/girlmodel.png" className="fitImage" />
                </div>
                <div style={{marginTop:'100px'}} >
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
                        <div style={{fontWeight:'bold', fontSize:'18px', marginBottom:'5px'}} >Daftar Sekarang</div>
                        <div style={{display:'flex',gap:'2px',justifyContent:'center', fontSize:'12px'}} >
                            <span>Sudah punya akun Epic Goods?</span>
                            <span>
                                <a href="/auth/login" style={{color:'blue', fontWeight:'bold'}} >Masuk</a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom:'10px'}} >
                            <div style={{marginBottom:'5px'}} >Name</div>
                            <div>
                                <input placeholder="e.g John Doe" tyle="text" style={{
                                    border:'1px solid gainsboro',
                                    padding:'10px',
                                    width:'100%',
                                    borderRadius:'8px'
                                }} name="name" />
                            </div>
                        </div>
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
                            }} >Daftar</button>
                        </div>
                        <div style={{marginTop:'30px', textAlign:'center'}} >
                            Dengan mendaftar, saya menyetujui <a href="/syaratketentuan" style={{color:'blue', fontWeight:'bold'}} >Syarat & Ketentuan</a> yang berlaku.
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};
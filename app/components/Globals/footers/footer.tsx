// @flow
import * as React from 'react';

export default function __Footer() {
    return (
        <footer style={{background:'#ffe6a2',marginTop:'50px'}}>
            <div className="content">
                <div style={{
                    padding:'40px',
                    justifyContent:'space-around',
                    display:'flex',
                    alignItems:'center',
                    gap:'20px'
                }} className="containerContent flex_wrapp">
                    <div style={{width:'100%'}}>
                        <div style={{
                            width:'200px'
                        }}>
                            <img src="/logo.png" className="fitImage"/>
                        </div>
                        <div className='bold'>PT. Menjadi Software Engineer</div>
                        <div>Grand Indonesia Plaza</div>
                        <div>Jakarta Pusat</div>
                    </div>
                    <div style={{width:'100%',display:'flex',flexDirection:'column',gap:'10px'}}>
                        <div className="bold">
                            Menu
                        </div>
                        <div>
                            <a href="/">Home</a>
                        </div>
                        <div>
                            <a href="/product">Product</a>
                        </div>
                        <div>
                            <a href="/testomonial">Testimonial</a>
                        </div>
                    </div>
                    <div style={{width:'100%',display:'flex',flexDirection:'column',gap:'10px'}}>
                        <div className="bold">Contact us</div>
                        <div>
                            <a href="mailto:email@example.com">email@example.com</a>
                        </div>
                        <div className="bold">Social Media</div>
                        <div style={{display:'flex',gap:'10px',alignItems:'flex-end'}}>
                            <div style={{width:'24px'}}>
                                <a href="/social-media/instagram">
                                    <img src="/instagram.png" className="fitImage"/>
                                </a>
                            </div>
                            <div style={{width:'26px'}}>
                                <a href="/social-media/youtube">
                                    <img src="/youtube.png" className="fitImage"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
// @flow
"use client"; // Add this line
import * as React from 'react';
import { useState } from 'react';

import './style.css';

type Props = {};

export default function Page(props: Props) {
    // state to hold OTP values
    const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

    // handle input change
    const handleInputChange = (index: number, value: string) => {
        if (value.length > 1) return; // Limit input to one character

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // automatically focus the next input
        if (value && index < otp.length - 1) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    // handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Submitted OTP: ${otp.join('')}`);
    };

    return (
        <form onSubmit={handleSubmit}>
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
                        <div style={{fontWeight:'bold', fontSize:'18px', marginBottom:'5px'}} >OTP</div>
                        <div style={{display:'flex',gap:'2px',justifyContent:'center', fontSize:'12px'}} >
                            <span>Masukan kode otp yang dikirimkan ke email</span>
                        </div>
                    </div>
                    <div>
                        <div className="otp">
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    id={`otp-input-${index}`}
                                    type="number"
                                    value={value}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    maxLength={1}
                                    style={{ width: '40px', textAlign: 'center' }}
                                />
                            ))}
                        </div>
                        <div>
                            <button type="submit">Verify</button>
                        </div>
                        <div style={{marginTop:'30px', textAlign:'center', display:'flex',alignItems:'center',
                            justifyContent:'center', gap:'10px'
                        }} >
                            <div>
                                2.59s
                            </div>
                            <div>
                                <button type="button">Resend</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

import React, { Component } from 'react'

const Content1 = (props) => {
    return (
        <main className='main'>
            <div className="main__wrapper">
                <div className='main__text'>
                    <p>Hi, my name is <span>{props.name}</span></p>
                    <p>a frontend developer</p>
                    <p>with passion to lear and create</p>
                </div>
                <a className='btn__container' href="https://docs.google.com/document/u/1/export?format=pdf&id=1ETQgt0fEBYm2fk6x1Pttcn-IeC0ujA7M&token=AC4w5Vjsdvg_Qo6a2oPIatlx6Pw0WQNKBA%3A1673093742596&ouid=100426792069851959092&includes_info_params=true&usp=drive_web&cros_files=false&inspectorResult=%7B%22pc%22%3A3%2C%22lplc%22%3A3%7D" download="CV">
                    <button className='main__btn'>Download CV</button>
                </a>
            </div>
        </main>
    )
}
export default Content1
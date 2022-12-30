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
                <button className='main__btn'>Download CV</button>
            </div>
        </main>
    )
}
export default Content1
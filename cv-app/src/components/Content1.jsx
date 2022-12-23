import React, { Component } from 'react'

export default class Content1 extends Component {
    render() {
        return (
            <main className='main'>
                <div className="main__wrapper">
                    <div className='main__text'>
                        <p>Hi, my name is <span>Edward</span></p>
                        <p>a frontend developer</p>
                        <p>with passion to lear and create</p>
                    </div>
                    <button className='main__btn'>Download CV</button>
                </div>
            </main>
        )
    }
}

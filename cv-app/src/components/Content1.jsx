import React from 'react'

const Content1 = (props) => {
    return (
        <main className='main'>
            <div className="main__wrapper">
                <div className='main__text'>
                    <p>Hi, my name is <span>{props.name}</span></p>
                    <p>a frontend developer</p>
                    <p>with passion to learn and create</p>
                </div>
                <a className='btn__container'
                    href="https://docs.google.com/document/u/1/export?format=pdf&id=1ETQgt0fEBYm2fk6x1Pttcn-IeC0ujA7M&token=AC4w5Vjvws9M3RBUyDPSXnC6VsLTIRVXLw%3A1675099358019&includes_info_params=true&cros_files=false"
                    download="CV">

                    <button className='main__btn'>Download CV</button>
                </a>
            </div>
        </main>
    )
}
export default Content1
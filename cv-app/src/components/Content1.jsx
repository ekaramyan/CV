import React from 'react'

const Content1 = (props) => {
    return (
        <main className='main' id='start'>
            <div className="main__wrapper">
                <div className='main__text'>
                    <p>Hi, my name is <span>{props.name}</span></p>
                    <p>a frontend developer</p>
                    <p>with passion to learn and create</p>
                </div>
                <a className='btn__container'
                    href="https://docs.google.com/document/u/1/export?format=pdf&id=1AOb_Ge5almuXs9xVI0xuHTPh2zn1D_ht&token=AC4w5VjbvaShQIEeB6AzGdvnxveuJqiv6A%3A1681491335686&includes_info_params=true&cros_files=false"
                    download="CV">

                    <button className='main__btn'>Download CV</button>
                </a>
            </div>
        </main>
    )
}
export default Content1
/* eslint-disable no-unused-vars */
import { Fragment } from 'react'
import './HomePage.css'
import { animate } from 'animejs'
import Navbar from '../Navbar/Navbar'

export default function HomePage() {
    const links = [
        { label: 'Inicio', to: '/home' },
        { label: 'About', to: '/about' },
        { label: 'Projects', to: '/projects' },
        { label: 'Skills', to: '/skills' },
        { label: 'Contact', to: '/contact' }
    ]

    const handleNavigate = (to) => {
        console.log('Navegar a:', to)
    }

    return (
        <Fragment>
            <header className='HP-Header'>
                <h1 className='HP-HeaderTitle'>Elder Estrada</h1>
                <Navbar links={links} onNavigate={handleNavigate} initialIndex={0} />
            </header>
            <main className='HP-Main'>
                <h1 className='HP-MainTitle'>Hi, I'am Elder Estrada</h1>
                <p className='HP-MainText'>Frontend Developer</p>
                <p className='HP-MainText'>Passionate about beautiful and functonal web experience</p>
                <div className='HP-Controls'>
                    <button className='HP-Button'>Contact me</button>
                    <button className='HP-Button'>Download CV</button>
                </div>
            </main>
        </Fragment>
    )
}
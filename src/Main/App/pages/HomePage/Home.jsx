import { Fragment } from 'react'
import Typewriter from '../../Components/Typewriter/Typewriter.jsx'
import './Home.css'

export default function Home({colorUI = {}}) {
    return (
        <Fragment>
            <main className='main' style={{"--main": colorUI.main, "--light": colorUI.light}}>
                <Typewriter text={'Hi, I am Elder Estrada'} speed={100} className='main-title' />
                <p className='main-text'>Frontend Developer</p>
                <p className='main-text'>Passionate about beautiful and functional web experience</p>
                <div className='controls'>
                    <button className='button'>Contact me</button>
                    <button className='button'>Download CV</button>
                </div>
            </main>
        </Fragment>
    )
}
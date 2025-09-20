import { Fragment, useEffect } from 'react'
import { animate, utils } from 'animejs'
import InteractiveImage from '../../Components/InteractiveImage/InteractiveImage.jsx'
import CreateSquare from '../../Components/CreateSquare/CreateSquare.jsx'
import './About.css'

export default function About({ colorUI = {} }) {
    const squares = [
        { title: 'Name:', content: 'Elder Said Estrada Rodriguez', id: 0 },
        { title: 'Age:', content: 16, id: 1 },
        { title: 'Grade:', content: '2SMX', id: 2 },
        { title: 'School:', content: 'Monlau - Sagrera', id: 3 }
    ]

    useEffect(() => {
        const $rows = utils.$('.squares')

        $rows.forEach(row => {
            animate(row, {
                y: [
                    { from: -1000 },
                    { to: 0 }
                ],
                opacity: 1,
                duration: 100,
                ease: 'inOutExpo',
            })
        })
    })

    return (
        <Fragment>
            <main
                className='about-main' 
                style={{ "--main": colorUI.main, "--light": colorUI.light }}
            >
                <div className='image-box'>
                    <InteractiveImage
                        src={'/elder.jpg'} 
                        alt={'Elder'} 
                    />
                </div>
                <div className='separator'></div>
                <div className='square-box'>
                    <CreateSquare 
                        squares={squares} 
                        squaresClass='squares'
                    />
                </div>

            </main>
        </Fragment>
    )
}
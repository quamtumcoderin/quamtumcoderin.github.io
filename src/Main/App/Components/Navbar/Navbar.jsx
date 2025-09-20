import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { animate } from 'animejs'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ links = [], colors=[] }) {
    const containerRef = useRef(null)
    const linkRefs = useRef([])
    const indicatorRef = useRef(null)

    const location = useLocation()
    const navigate = useNavigate()

    const currentIndex = links.findIndex(link => link.to === location.pathname)
    const [ activeIndex, setActiveIndex ] = useState(currentIndex >= 0 ? currentIndex : 0)

    useEffect(() => {
        if (currentIndex >= 0) {
            setActiveIndex(currentIndex)
            setColorUI({ main: colors[currentIndex].main, light: colors[currentIndex].light })
        }
    }, [location.pathname, currentIndex, colors])

    const [ colorUI, setColorUI ] = useState({
        main: colors[0].main,
        light: colors[0].light
    })

    linkRefs.current = links.map((_, i) => linkRefs.current[i] ?? React.createRef())

    const animateIndicator = (index) => {
        const container = containerRef.current
        const target = linkRefs.current[index]?.current
        const indicator = indicatorRef.current
        if (!container || !target || !indicator) return

        const containerRect = container.getBoundingClientRect()
        const targetRect = target.getBoundingClientRect()
        const left = targetRect.left - containerRect.left
        const width = targetRect.width

        animate(indicator, {
            translateX: left,
            width: width,
            easing: 'easeOutElastic(1, .6)',
            duration: 200,
        })
    }

    useEffect(() => {
        animateIndicator(activeIndex)
    }, [activeIndex, links])

    useEffect(() => {
        const handleResize = () => animateIndicator(activeIndex)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [activeIndex])

    const handleClick = (e, to, index) => {
        e.preventDefault()
        setActiveIndex(index)
        navigate(to)
        setColorUI({ main: colors[index].main, light: colors[index].light })
    }

    const handleKeyDown = (e, to, index) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setActiveIndex(index)
            navigate(to)
        }

        if (e.key === 'ArrowRight') {
            e.preventDefault()
            const next = (index + 1) % links.length
            linkRefs.current[next].current.focus()
            setActiveIndex(next)
            navigate(links[next].to)

            setColorUI({ main: colors[next].main, light: colors[next].light })
        }

        if (e.key === 'ArrowLeft') {
            e.preventDefault()
            const prev = (index - 1 + links.length) % links.length
            linkRefs.current[prev].current.focus()
            setActiveIndex(prev)
            navigate(links[prev].to)

            setColorUI({ main: colors[prev].main, light: colors[prev].light })
        }
    }

    return (
        <header className='header' style={{ "--main": colorUI.main, "--light": colorUI.light }}>
            <h1 className="header-title" style={{ color: colorUI.main }}>Elder Estrada</h1>
            <nav className='nav' aria-label='Principal' ref={containerRef}>
                <ul className='nav-list' role='menubar' aria-orientation='horizontal'>
                    {links.map((link, i) => (
                        <li key={link.to ?? link.label} className='nav-item' role='none'>
                            <a
                                href={link.to ?? '#'}
                                role='menuitem'
                                ref={(el) => (linkRefs.current[i].current = el)}
                                className={`nav-link ${i ===    activeIndex ?  'active' : ''}`}
                                aria-current={i === activeIndex ?   'page' :  undefined}
                                onClick={(e) => handleClick(e, link.to, i)}
                                onKeyDown={(e) => handleKeyDown(e, link.to, i)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <span className='nav-indicator' ref={indicatorRef} aria-hidden='true'></span>
                </ul>
            </nav>
        </header>
    )
}
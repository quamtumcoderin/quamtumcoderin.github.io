import React, { useEffect, useRef, useState } from 'react'
import anime from 'animejs'
import './Navbar.css'

export default function Navbar({ links = [], onNavigate, initialIndex }) {
    const containerRef = useRef(null)
    const linkRefs = useRef([])
    const indicatorRef = useRef(null)
    const [ activeIndex, setActiveIndex ] = useState(initialIndex ?? 0)

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

        anime({
            targets: indicator,
            translateX: left,
            width: width,
            easing: 'easeOutElastic(1, .6)',
            duration: 700,
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
        if (typeof onNavigate === 'function') onNavigate(to)
    }

    const handleKeyDown = (e, to, index) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setActiveIndex(index)
            if (typeof onNavigate === 'function') onNavigate(to)
        }

        if (e.key === 'ArrowRight') {
            e.preventDefault()
            const next = (index + 1) % links.length
            linkRefs.current[next].current.focus()
            setActiveIndex(next)
            if (typeof onNavigate === 'function') onNavigate(links[next].to)
        }

        if (e.key === 'ArrowLeft') {
            e.preventDefault()
            const prev = (index - 1 + links.length) % links.length
            linkRefs.current[prev].current.focus()
            setActiveIndex(prev)
            if (typeof onNavigate === 'function') onNavigate(links[prev].to)
        }
    }

    return (
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
    )
}
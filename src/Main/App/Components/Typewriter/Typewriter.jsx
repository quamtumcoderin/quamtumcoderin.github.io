import { useEffect, useState } from 'react'

export default function Typewriter({ text, speed = 100, className = 'title' }) {
    const [ displayedText, setDisplayedText ] = useState('')

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1))
            i++
            if (i === text.length) clearInterval(interval)
        }, speed)
        
        return () => clearInterval(interval)
    }, [text, speed])

    return <h1 className={className}>{displayedText}</h1>
}
import { animate } from 'animejs'

export default function InteractiveImage ({ src, alt, className }) {
    const interactive = (target) => {
        animate(target, {
            y: [
                { to: '-50px', ease: 'inOutExpo' },
                { to: 0, ease: 'outBounce' }
            ],
            duration: 500,
        })
    }

    return (
        <img onClick={(self) => interactive(self.currentTarget)} className={className} src={src} alt={alt} />
    )
}
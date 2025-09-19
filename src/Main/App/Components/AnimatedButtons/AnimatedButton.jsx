import { animate } from 'animejs'

export default function AnimatedButtons ({ text, className }) {
    const buttonHover = (target) => {
        const animation = animate(target, {
            loop: true,
            duration: 200,
            rotate: [
                { to: -1, ease: 'inOutExpo' },
                { to: 1, ease: 'inOutExpo' }
            ]
        })

        return animation
    }

    const buttonFocus = (target) => {
        animate(target, {
            duration: 300,
            scale: [
                { to: .9, ease: 'inOutBounce' },
                { to: 1, ease: 'inOutBounce' }
            ]
        })
    }

    return (
        <button 
            onClick={(self) => buttonFocus(self.currentTarget)} 
            onMouseLeave={(self) => {
                buttonHover(self.currentTarget).revert()
                animate(self.currentTarget, { rotate: 0 })
            }} 
            onMouseOver={(self) => buttonHover(self.currentTarget)} 
            className={className}
        >
            {text}
        </button>
    )
}
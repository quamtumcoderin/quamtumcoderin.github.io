import { data } from "../MORE/data.js"

const elements = document.querySelectorAll('.element')

export const generalStyles = {
    buttons: {
        expandButtons: function() {
            const buttons = document.querySelectorAll('.btn')

            buttons.forEach(button => {
                button.addEventListener('mouseover', (event) => {
                    event.currentTarget.style.transition = 'all 0.5s ease'
                    event.currentTarget.style.transform = 'scale(1.05)'
                })

                button.addEventListener('mouseleave', (event) => {
                    event.currentTarget.style.transition = 'all 0.5s ease'
                    event.currentTarget.style.transform = 'scale(1)'
                })
            })
        }
    },
    elements: {
        elementsIntro: function() {
            elements.forEach((element, index) => {
                element.style.transform = 'translateX(100vw)'
                element.style.opacity = '0'

                setTimeout(() => {
                    element.style.transition = 'all 0.5s ease-in'
                    element.style.transform = 'translateX(0)'
                    element.style.opacity = '1'
                }, (index + 1) * 100)
            })
        },
        elementsOutro: function() {
            const activators = document.querySelectorAll('.act')

            activators.forEach((activator, index) => {
                activator.addEventListener('click', () => {
                    elements.forEach((element, innerIndex) => {
                        setTimeout(() => {
                            element.style.transition = 'all 0.5s ease-out'
                            element.style.transform = 'translateX(-100vw)'
                            element.style.opacity = '0'
                        }, (innerIndex + 1) * 100)
                    })
                    console.log(data.pages)

                    setTimeout(() => {
                        window.location.href = data.pages[index]
                    }, 1100)
                })
            })
        }
    }
}
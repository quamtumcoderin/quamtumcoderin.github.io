export function toggleMenu() {
    const toggle = document.querySelector('.menu-toggle')
    const menu = document.querySelector('.menu')

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open')
        toggle.textContent = isOpen ? 'Cerrar menú' : 'Abrir menú'
    })
}

export function applyColors() {
    const images = document.querySelectorAll('.rules-img')
    const buttons = document.querySelectorAll('.buttons')
    const colors = [
        '#01273c',
        '#000000',
        '#5865f2',
        '#efd134',
        '#01c3ff',
        '#dce2f2'
    ]

    images.forEach((img, index) => {
        img.style.borderBottom = `6px solid ${colors[index]}`
    })
    buttons[0].style.backgroundColor = colors[1]
    buttons[1].style.backgroundColor = colors[2]
}

export function applyDelay() {
    const imgBoxes = document.querySelectorAll('.rules-box')
    let delay = 0

    imgBoxes.forEach(box => {
        box.style.animationDelay = `${delay}s`
        delay += 0.5
    })
}

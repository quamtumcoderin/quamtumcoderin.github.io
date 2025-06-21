import { getSimcoImg, getSimcoName } from "./simcotools.js"

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

export async function applyData() {
    const images = document.querySelectorAll('.staff-image')
    const names = document.querySelectorAll('.staff-name')
    const IDs = [4293105, 4303454, 3682478, 4244317, 4599575, 3453453, 4396747, 4127079]

    for(let i = 0; i < IDs.length; i++) {
        const ID = IDs[i]

        try {
            const img = await getSimcoImg(ID)
            const name = await getSimcoName(ID)

            if(images[i]) images[i].src = img
            if(images[i]) images[i].alt = ID
            if(names[i]) names[i].textContent = name
        } catch (e) {
            console.error(`Error al aplicar los datos del ID ${ID}`, e.message)
        }
    }
}
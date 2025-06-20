export function toggleMenu() {
    const toggle = document.querySelector('.menu-toggle')
    const menu = document.querySelector('.menu')

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open')
        toggle.textContent = isOpen ? 'Cerrar menú' : 'Abrir menú'
    })
}

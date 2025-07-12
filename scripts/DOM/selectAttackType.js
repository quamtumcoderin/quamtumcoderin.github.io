import { colors } from "../MORE/colors.js"
import { percentOfAttack } from "../TYPE/types.js"
import { table } from "./constructTables.js"

export default function selectAttackType() {
    const typeOneAttack = document.getElementById('type-one-attack')
    const selectAttackType = document.getElementById('select-attack-type')
    const types = Object.keys(colors.types)
    const tColors = Object.values(colors.types)

    types.forEach((type, index) => {
        const option = document.createElement('li')
        option.classList.add('option')
        option.dataset.attack = type
        option.textContent = type
        option.style.backgroundColor = tColors[index]
        typeOneAttack.appendChild(option)
    })

    const options = typeOneAttack.querySelectorAll('.option')

    selectAttackType.addEventListener('click', () => typeOneAttack.classList.toggle('show'))
    options.forEach(option => {
        option.addEventListener('click', (event) => {
            const { backgroundColor } = event.currentTarget.style
            const text = event.currentTarget.dataset.attack
            const typeData = percentOfAttack(text)

            table.attack(typeData, text)
            selectAttackType.style.color = '#fff'
            selectAttackType.style.backgroundColor = backgroundColor
            selectAttackType.textContent = text
            typeOneAttack.classList.remove('show')
        })
    })
}
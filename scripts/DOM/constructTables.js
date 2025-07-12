import { colors } from "../MORE/colors.js"

const defenseTitle = document.getElementById('defense-title')
const typesBoxes = document.querySelectorAll('.types')
const tColors = Object.values(colors.types)
const types = Object.keys(colors.types)
const attackTitle = document.getElementById('attack-title')
const attackBoxes = document.querySelectorAll('.attack-types')

export const table = {
    defense: function(object, type1, type2) {
        defenseTitle.textContent = ''
        typesBoxes.forEach(box => box.innerHTML = '')
        if (type1 && type2) defenseTitle.textContent = `Defensa de ${type1} y ${type2}`
        if (type1 && !type2) defenseTitle.textContent = `Defensa de ${type1}`

        Object.entries(object).forEach(([key, value], index) => {
            const newType = document.createElement('p')
            let backgroundColor
            index-

            types.forEach(type => {if (key == type) backgroundColor = tColors[types.indexOf(type)]})
            newType.style.backgroundColor = backgroundColor
            newType.textContent = key

            if (value === 4) typesBoxes[0].appendChild(newType)
            if (value === 2) typesBoxes[1].appendChild(newType)
            if (value === 1) typesBoxes[2].appendChild(newType)
            if (value === 0.5) typesBoxes[3].appendChild(newType)
            if (value === 0.25) typesBoxes[4].appendChild(newType)
            if (value === 0) typesBoxes[5].appendChild(newType)

            setTimeout(() => {
                newType.style.transition = 'all 1s ease-in'
                newType.style.opacity = '1'
                newType.style.transform = 'translate(0, 0)'
            }, 1800 - (100 * index))
        })
    },
    attack: function(object, type) {
        attackTitle.textContent = ''
        attackBoxes.forEach(box => box.innerHTML = '')
        attackTitle.textContent = `Ataque de ${type}`

        Object.entries(object).forEach(([key, value], index) => {
            const newType = document.createElement('p')
            let backgroundColor
            index-

            types.forEach(innerType => {if (key == innerType) backgroundColor = tColors[types.indexOf(innerType)]})
            newType.style.backgroundColor = backgroundColor
            newType.textContent = key

            if (value == 2) attackBoxes[0].appendChild(newType)
            if (value == 1) attackBoxes[1].appendChild(newType)
            if (value == 0.5) attackBoxes[2].appendChild(newType)
            if (value == 0) attackBoxes[3].appendChild(newType)

            setTimeout(() => {
                newType.style.transition = 'all 1s ease-in'
                newType.style.opacity = '1'
                newType.style.transform = 'translate(0, 0)'
            }, 1800 - (100 * index))
        })
    }
}
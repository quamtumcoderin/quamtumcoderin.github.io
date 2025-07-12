import{colors}from"../MORE/colors.js"
import{percentOfDefense}from"../TYPE/types.js"
import{table}from"./constructTables.js"
const primaryType=document.getElementById('type-one')
const selectOne=document.getElementById('select-one')
const secondaryType=document.getElementById('type-two')
const selectTwo=document.getElementById('select-two')
const types=Object.keys(colors.types)
const tColors=Object.values(colors.types)
let type1, type2
export const select={
    types:function(){
        if(!primaryType)return
        types.forEach((type, index)=>{
            const option=document.createElement('li')
            option.classList.add('option')
            option.dataset.typeOne=type
            option.textContent=type
            option.style.backgroundColor=tColors[index]
            primaryType.appendChild(option)
        })
        const pOptions=primaryType.querySelectorAll('.option')
        selectOne.addEventListener('click',()=>primaryType.classList.toggle('show'))
        pOptions.forEach(option=>{
            option.addEventListener('click',(event)=>{
                const {backgroundColor}=event.currentTarget.style
                const text=event.currentTarget.dataset.typeOne
                type1=text.toLowerCase()
                const typeData=percentOfDefense(type1)
                table.defense(typeData, text)
                selectOne.style.color='#fff'
                selectOne.style.backgroundColor=backgroundColor
                selectOne.textContent=text
                selectTwo.style.color='#000'
                selectTwo.style.backgroundColor='#f0f0f0'
                selectTwo.textContent='Segundo tipo'
                primaryType.classList.remove('show')
                secondaryType.innerHTML=''
                const scndTypes=types.filter(type=>type!==text)
                const scndColors=scndTypes.map(t=>tColors[types.indexOf(t)])
                scndTypes.forEach((type, index)=>{
                    const option=document.createElement('li')
                    option.classList.add('option')
                    option.dataset.typeTwo=type
                    option.textContent=type
                    option.style.backgroundColor=scndColors[index]
                    secondaryType.appendChild(option)
                })
                const sOptions=secondaryType.querySelectorAll('.option')
                sOptions.forEach(option=>{
                    option.addEventListener('click',(event)=>{
                        const {backgroundColor}=event.currentTarget.style
                        const text=event.currentTarget.dataset.typeTwo
                        type2=text.toLowerCase()
                        const typeData=percentOfDefense(type1,type2)
                        table.defense(typeData,type1,type2)
                        selectTwo.style.color='#fff'
                        selectTwo.style.backgroundColor=backgroundColor
                        selectTwo.textContent=text
                        secondaryType.classList.remove('show')
                    })
                })
            })
        })
        selectTwo.addEventListener('click',()=>secondaryType.classList.toggle('show'))
    }
}
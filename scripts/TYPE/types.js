import { typesStats } from './typesData.js'

export function percentOfDefense(type1, type2) {
    const types = Object.keys(typesStats)
    const result = {}

    if (type1 && !type2) types.forEach(type => result[type] = typesStats[type1].defense[type] * 1)
    if (type1 && type2) types.forEach(type => result[type] = typesStats[type1].defense[type] * typesStats[type2].defense[type])

    return result
}

export function percentOfAttack(type) {
    const types = Object.keys(typesStats)
    const result = {}

    types.forEach((innerType) => result[innerType] = typesStats[type].attack[innerType])

    return result
}
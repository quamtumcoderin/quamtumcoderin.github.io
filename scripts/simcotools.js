const paths = {
    API: 'https://cors-anywhere.herokuapp.com/https://api.simcotools.com/v1/'
}

export async function getSimcoImg(companyID) {
    for (let i = 0; i < 2; i++) {
        try {
            const response = await axios.get(`${paths.API}realms/${i}/companies/${companyID}`, {
                headers: {
                    'accept' : '*/*'
                }
            })

            if(response) {
                console.log(`Compañía encontrada en ${i}`)

                return response.data.company.logo
            }
        } catch (error) {
            console.error('Error encontrado:', error.message)
        }
    }
}

export async function getSimcoName(companyID) {
    for (let i = 0; i < 2; i++) {
        try {
            const response = await axios.get(`${paths.API}realms/${i}/companies/${companyID}`, {
                headers: {
                    'accept' : '*/*'
                }
            })

            if(response) {
                console.log(`Compañía encontrada en ${i}`)
                console.log(response.data.company.name)
                return response.data.company.name
            }
        } catch (error) {
            console.error('Error encontrado:', error.message)
        }
    }
}
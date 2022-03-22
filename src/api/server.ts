let token =  '96fcff05589832ae8d156103f3f40d512ad05718a0ee22ca'

export const server_calls = {
    get: async () => {
        const response = await fetch (`https://beverage-collection-monika.herokuapp.com/api/drinks`, {
           method:'GET',
           headers: {
               'Content-Type': 'application/json',
               'x-access-token': `Bearer ${token}`
           }
        });
        if (!response.ok) {
            throw new Error ('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch (`https://beverage-collection-monika.herokuapp.com/api/drinks`, {
           method:'POST',
           headers: {
               'Content-Type': 'application/json',
               'x-access-token': `Bearer ${token}`
           },
           body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error ('Failed to fetch data from server')
        }
        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch (`https://beverage-collection-monika.herokuapp.com//api/drinks/${id}`, {
           method:'PUT',
           headers: {
               'Content-Type': 'application/json',
               'x-access-token': `Bearer ${token}`
           },
           body: JSON.stringify(data)
        });
    },

    delete: async (id: string) => {
        const response = await fetch (`https://beverage-collection-monika.herokuapp.com//api/drinks/${id}`, {
           method:'DELETE',
           headers: {
               'Content-Type': 'application/json',
               'x-access-token':  `Bearer ${token}`
           }
        })
    }
}
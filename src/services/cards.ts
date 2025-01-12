import { urlBase } from '../config';
import { Card } from '../@types'



const CardService = {
    getAllCards: async function () {
        return await urlBase.get('/cards')
    }

}

export default CardService;
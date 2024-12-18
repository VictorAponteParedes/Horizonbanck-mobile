import { urlBase } from '../config';
import { UserData } from '../types'



const AuthService = {
    registerUser: async function (userdata: UserData) {
        return await urlBase.post('/users/create', userdata)
    }

}

export default AuthService;
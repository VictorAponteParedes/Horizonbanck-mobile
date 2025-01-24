import { urlBase } from '../config';
import { UserData } from '../@types'



const AuthService = {
  registerUser: async function (userdata: UserData) {
    return await urlBase.post('/users', userdata);
  },
  getAllUsers: async function () {
    return await urlBase.get('/users');
  },
};

export default AuthService;
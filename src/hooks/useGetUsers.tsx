import {useState} from 'react';
import AuthService from '../services/auth';

const useGetUsers = () => {
  const {getAllUsers} = AuthService;
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await getAllUsers();
      console.log('response', response);
      setUsers(response.data);
    } catch (error) {
      console.log('', error);
    }

    return {
      users,
      getUsers,
    };
  };
};

export default useGetUsers;

import axios from 'axios';
import { Dispatch } from 'redux';

export const registerUser = (userData: any) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const response = await axios.post('/api/register', userData);
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error: any) {
      dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
    }
  };
};

// Adjust the createUser function to correctly handle the returned function
export const createUser = (userData: any) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      // Call registerUser and dispatch its return value
      const registerAction = registerUser(userData);
      await registerAction(dispatch);
    } catch (error: any) {
      dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
    }
  };
};

export const loginUser = (userData: any) => {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      const response = await axios.post('/api/login', userData);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error: any) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
};

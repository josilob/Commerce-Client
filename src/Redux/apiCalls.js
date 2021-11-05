import { publicRequest } from '../axios';
import { loginStart, loginFailure, loginSuccess } from './userSlice';

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post('/auth/login', user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};

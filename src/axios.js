import axios from 'axios';

// export const BASE_URL = 'http://localhost:27017/';
export const BASE_URL = 'https://marketplace-api-84ovlhkzq-josilob.vercel.app/';

const ADMIN_TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2IxNTEzNTMxZGYwZDRkNWVhMTQ5MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTg4NDQyMSwiZXhwIjoxNjM1OTcwODIxfQ.krQxIMQ1puXtH01fY0RWG_mIJ7QmbTzWhDgGqzjcp6E';

export const publicRequest = axios.create({
	baseURL: BASE_URL
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: {
		token: `Bearer ${ADMIN_TOKEN}`
	}
});

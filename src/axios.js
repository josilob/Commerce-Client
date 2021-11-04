import axios from 'axios';

// const BASE_URL = 'http://localhost:27017/';
const BASE_URL = 'https://marketplace-srv.vercel.app/';

const ADMIN_TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2IxNTEzNTMxZGYwZDRkNWVhMTQ5MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTg4NDQyMSwiZXhwIjoxNjM1OTcwODIxfQ.krQxIMQ1puXtH01fY0RWG_mIJ7QmbTzWhDgGqzjcp6E';

export const publicRequest = axios.create({
	baseURL: BASE_URL,
	header: { 'Access-Control-Allow-Origin': true }
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	header: { token: `Bearer ${ADMIN_TOKEN}` }
});

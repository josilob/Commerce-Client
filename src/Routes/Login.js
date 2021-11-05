import styled from 'styled-components';
import { mobile } from '../Responsive';

export const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder='username' />
					<Input placeholder='password' />
					<Button>LOGIN</Button>
					<Link>FORGOT THE PASSOWRD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.15)
		),
		url('https://images.unsplash.com/photo-1490114538077-0a7f8cb49891')
			center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: #fff;
	border: 2px solid teal;

	${mobile({ width: '75%' })}
`;

const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
	font-size: 1rem;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	flood-color: #fff;
	margin-bottom: 10px;

	&:hover {
		cursor: pointer;
	}
`;

const Link = styled.a`
	margin: 5px 0;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

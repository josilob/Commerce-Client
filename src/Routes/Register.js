import styled from 'styled-components';
import { mobile } from '../Responsive';

export const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder='name' />
					<Input placeholder='last name' />
					<Input placeholder='email' />
					<Input placeholder='username' />
					<Input placeholder='password' />
					<Input placeholder='confirm password' />
					<Agreement>
						By creating an account, I consent to the processing of my personal data in
						accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>CONFIRM</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75)),
		url('https://images.unsplash.com/photo-1484502249930-e1da807099a5')
			center/cover no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
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
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 20px 10px 0;
	padding: 10px;
	font-size: 1rem;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	flood-color: #fff;

	&:hover {
		cursor: pointer;
	}
`;

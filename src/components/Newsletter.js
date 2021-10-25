import styled from 'styled-components';
import { Send } from '@material-ui/icons';
import { mobile } from '../Responsive';

export const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>Stay updated with latest arrivals</Description>
			<InputContainer>
				<Input placeholder='Your email' />
				<Button>
					<Send />
				</Button>
			</InputContainer>
		</Container>
	);
};

const Container = styled.div`
	height: 60vh;
	background-color: #fcf5f5;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Title = styled.h1`
	font-size: 4.5rem;
	margin-bottom: 1rem;
`;

const Description = styled.p`
	font-size: 1.75rem;
	font-weight: 300;
	margin-bottom: 20px;

	${mobile({ textAlign: 'center' })}
`;

const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;

	${mobile({ width: '80%' })}
`;

const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 1.2rem;
`;

const Button = styled.button`
	flex: 1;
	border: none;
	background-color: teal;
	color: #fff;
`;

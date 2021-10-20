import styled from 'styled-components';
import { Send } from '@material-ui/icons';

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

const Container = styled.div``;
const Title = styled.h1``;
const Description = styled.p``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

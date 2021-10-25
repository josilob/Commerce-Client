import styled from 'styled-components';
import { Announcement } from '../Announcement';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

export const Cart = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<Title>Your Cart</Title>
				<Top>
					<TopBtn>CONTINUE SHOPPING</TopBtn>
					<TopTexts>
						<TopText>Shopping Bag(4)</TopText>
						<TopText>Wishlist(0)</TopText>
					</TopTexts>
					<TopBtn type='filled'>CHECKOUT</TopBtn>
				</Top>
				<Bottom></Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const TopBtn = styled.button`
	cursor: pointer;
	font-weight: 600;
	padding: 10px;
	border: ${(props) => props.type === 'filled' && 'none'};
	background-color: ${(props) =>
		props.type === 'filled' ? 'black' : 'transparent'};
	color: ${(props) => props.type === 'filled' && '#fff'};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0 10px;
`;

const Bottom = styled.div``;

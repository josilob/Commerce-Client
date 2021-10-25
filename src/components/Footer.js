import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter
} from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../Responsive';

export const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Marketplace.</Logo>
				<Description>
					Keep following the links below and stay in the loop. Find great deals, win
					giftcards and get weekly selection.
				</Description>
				<Socials>
					<SocialIcon color='3b5999'>
						<Facebook />
					</SocialIcon>
					<SocialIcon color='e4405f'>
						<Instagram />
					</SocialIcon>
					<SocialIcon color='55acee'>
						<Twitter />
					</SocialIcon>
					<SocialIcon color='e60023'>
						<Pinterest />
					</SocialIcon>
				</Socials>
			</Left>
			<Middle>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Cart</ListItem>
					<ListItem>Home</ListItem>
					<ListItem>Clothing</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Shoes</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Gear</ListItem>
					<ListItem>Terms</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>Order Tracking</ListItem>
				</List>
			</Middle>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: '10px' }} />
					523 Prairie Ave. Lake Worth, FL 33460{' '}
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: '10px' }} />
					+1 (987) 123 4567
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: '10px' }} />
					contact@marketplace.com
				</ContactItem>
				<Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
			</Right>
		</Container>
	);
};

const Container = styled.div`
	flex: 1;
	display: flex;

	${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Description = styled.p`
	margin: 20px 0;
`;

const Middle = styled.div`
	flex: 1;
	padding: 20px;

	${mobile({ display: 'none' })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 0.5rem;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;

	${mobile({ backgroundColor: '#fff8f8' })}
`;

const Logo = styled.h1``;

const Socials = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 2.25rem;
	height: 2.25rem;
	border-radius: 50%;
	color: #fff;
	background-color: #${(props) => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 1.5rem;
`;

const ContactItem = styled.div`
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 60%;
`;

import { Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons';
import styled from 'styled-components';

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
			<Middle></Middle>
			<Right></Right>
		</Container>
	);
};

const Container = styled.div`
	flex: 1;
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
`;

const Right = styled.div`
	flex: 1;
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
`;

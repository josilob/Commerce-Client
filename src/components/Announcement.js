import styled from 'styled-components';
import { mobile } from '../Responsive';

export const Announcement = () => {
	return (
		<Container>
			Free Shipping and 30-Day free returns. &nbsp;
			<Underline>SAVE UP TO 50%</Underline>
		</Container>
	);
};

const Container = styled.div`
	height: 30px;
	background-color: teal;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.95rem;
	font-weight: 500;

	${mobile({ fontSize: '.75rem' })}
`;

const Underline = styled.p`
	text-decoration: underline;
	cursor: pointer;
`;

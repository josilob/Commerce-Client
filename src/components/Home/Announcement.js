import styled from 'styled-components';

function Announcement() {
	return (
		<Container>
			Free Shipping and 30-Day free returns. &nbsp;
			<Underline>SAVE UP TO 50%</Underline>
		</Container>
	);
}

export default Announcement;

const Container = styled.div`
	height: 30px;
	background-color: teal;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.95rem;
	font-weight: 500;
`;

const Underline = styled.p`
	text-decoration: underline;
	cursor: pointer;
`;

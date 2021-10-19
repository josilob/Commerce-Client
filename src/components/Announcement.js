import styled from 'styled-components';

function Announcement() {
	return <Container>Great deals and free shipping on orders over $50</Container>;
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

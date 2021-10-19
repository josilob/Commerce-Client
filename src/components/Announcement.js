import styled from 'styled-components';

function Announcement() {
	return (
		<Container>Great deals and free shipping on orders over $50.</Container>
	);
}

export default Announcement;

const Container = styled.div`
	height: 30px;
	background-color: teal;
	color: #fff;
`;

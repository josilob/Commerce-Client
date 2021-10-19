import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import styled from 'styled-components';

export const Slider = () => {
	return (
		<Container>
			<Arrow direction='left'>
				<ChevronLeft />
			</Arrow>
			<Wrapper>
				<Slide>
					<ImageContainer>
						<Image src='https://www.designfreelogoonline.com/wp-content/uploads/2020/07/00381-shopping-01.png' />
					</ImageContainer>
					<InfoContainer></InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction='right'>
				<ChevronRight />
			</Arrow>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: coral;
	position: relative;
`;

const Arrow = styled.div`
	& {
		width: 50px;
		height: 50px;
		background-color: #fff7f7;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		bottom: 0;
		left: ${(props) => props.direction === 'left' && '10px'};
		right: ${(props) => props.direction === 'right' && '10px'};
		margin: auto;
		cursor: pointer;
		opacity: 0.5;
		transition: opacity 0.25s linear;
	}

	&:hover {
		opacity: 1;
	}
`;

const Wrapper = styled.div`
	height: 100%;
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;
const ImageContainer = styled.div`
	height: 100%;
	flex: 1;
`;

const InfoContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	height: 80%;
	max-height: 600px;
`;

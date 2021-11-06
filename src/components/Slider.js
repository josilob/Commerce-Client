import { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { sliderItems } from '../data';
import { mobile } from '../Responsive';

export const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction) => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		}
		if (direction === 'right') {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	const slides = sliderItems.map((item) => (
		<Slide bg={item.bg} key={item.id}>
			<ImageContainer>
				<Image src={item.img} />
			</ImageContainer>
			<InfoContainer>
				<Title>{item.title}</Title>
				<Description>{item.description}</Description>
				<Button>BUY NOW!</Button>
			</InfoContainer>
		</Slide>
	));

	// RENDER PORTION
	return (
		<Container>
			<Arrow direction='left' onClick={() => handleClick('left')}>
				<ChevronLeft style={{ transform: 'scale(1.5)' }} />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>{slides}</Wrapper>
			<Arrow direction='right' onClick={() => handleClick('right')}>
				<ChevronRight style={{ transform: 'scale(1.5)' }} />
			</Arrow>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	overflow: hidden;
	position: relative;

	${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
	& {
		width: 4rem;
		height: 4rem;
		background-color: #e1f4fc;
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
		opacity: 0.75;
		transition: opacity 1.5s ease;
		z-index: 2;
	}

	&:hover {
		opacity: 1;
	}
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: transform 1s ease;
`;

const Slide = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
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

const Title = styled.h1`
	font-size: 4rem;
`;
const Description = styled.p`
	margin: 3rem 0;
	font-size: 1.2rem;
	font-weight: 500;
	letter-spacing: 2px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 1.2rem;
	background-color: transparent;
	cursor: pointer;
`;

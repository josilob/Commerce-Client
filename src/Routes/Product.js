import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../axios';
import { addProduct } from '../Redux/cartSlice';
import { mobile } from '../Responsive';

export const Product = () => {
	const location = useLocation();
	const productID = location.pathname.split('/')[2];

	const [styles, setStyles] = useState({ cursor: 'initial' });
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [size, setSize] = useState('');
	const [color, setColor] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get(`products/${productID}`);
				setProduct(res.data);
			} catch (err) {
				console.log(err.message);
			}
		};
		getProduct();
		window.scrollTo(0, 0);
	}, [productID]);

	const handleQuantity = (type) => {
		if (type === 'decrease') {
			quantity > 1 && setQuantity(quantity - 1);
		}
		if (type === 'increase') {
			setQuantity(quantity + 1);
		}
	};

	const handleClick = () => {
		dispatch(addProduct({ ...product, quantity, color, size }));
	};

	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src={product.image} />
				</ImgContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Description>{product.description}</Description>
					<Price>$ {product.price}</Price>
					<FilterContainer>
						{/*
						 COLOR */}
						<Filter>
							<FilterTitle>Color</FilterTitle>
							{product.color?.map((clr) => (
								<FilterColor color={clr} key={clr} onClick={() => setColor(clr)} />
							))}
						</Filter>

						{/* SIZE */}
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize onChange={(e) => setSize(e.target.value)}>
								{product.size?.map((size) => (
									<FilterSizeOption key={size}>{size}</FilterSizeOption>
								))}

								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove
								onClick={() => handleQuantity('decrease')}
								onMouseEnter={() => setStyles({ cursor: 'pointer' })}
								onMouseLeave={() => setStyles({ cursor: 'initial' })}
								style={styles}
							/>
							<Amount>{quantity}</Amount>
							<Add
								onClick={() => handleQuantity('increase')}
								onMouseEnter={() => setStyles({ cursor: 'pointer' })}
								onMouseLeave={() => setStyles({ cursor: 'initial' })}
								style={styles}
							/>
						</AmountContainer>
						<Button onClick={handleClick}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;

	${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;

	${mobile({ padding: '10px' })}
`;

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: contain;

	${mobile({ height: '45vh' })}
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Description = styled.p`
	margin: 20px 0;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 2.5rem;
`;

const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;

	${mobile({ width: '100%' })}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 1.1rem;
	font-weight: 200;
`;

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0 5px;
	cursor: pointer;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 50%;

	${mobile({ width: '100%;' })}
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
`;

const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: #fff;
	cursor: pointer;
	font-weight: 500;

	&:hover {
		background-color: #f8f4f4;
	}
`;

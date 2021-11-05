import { Add, Remove } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import StripeCheckout from 'react-stripe-checkout';
import { useSelector } from 'react-redux';
import { userRequest } from '../axios';
import { useHistory } from 'react-router';

export const Cart = () => {
	const history = useHistory();
	const [styles, setStyles] = useState({});
	const cart = useSelector((state) => state.cart);
	const [stripeToken, setStripeToken] = useState(null);
	const KEY = process.env.REACT_APP_STRIPE;
	// console.log(cart);

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const res = await userRequest.post('/checkout/payment', {
					tokenId: stripeToken.id,
					amount: cart.total * 100
				});
				history.push('./success', { data: res.data });
			} catch (err) {
				console.log(err.message);
			}
		};
		stripeToken && makeRequest();
	}, [stripeToken, history, cart.total]);

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

				<Bottom>
					<Info>
						{cart.products.map((product) => (
							<Product>
								<ProductDetails>
									<Image src={product.image} />
									<Details>
										<ProductName>
											<b>Product:</b> {product.title}
										</ProductName>
										<ProductID>
											<b>ID:</b> {product._id}
										</ProductID>
										<ProductColor color={product.color}></ProductColor>
										<ProductSize>
											<b>Size:</b> {product.size}
										</ProductSize>
									</Details>
								</ProductDetails>
								<PriceDetails>
									<ProductAmount>
										<Add
											onMouseEnter={() => setStyles({ cursor: 'pointer' })}
											onMouseLeave={() => setStyles({ cursor: 'initial' })}
											style={styles}
										/>
										<Amount>{product.quantity}</Amount>
										<Remove
											onMouseEnter={() => setStyles({ cursor: 'pointer' })}
											onMouseLeave={() => setStyles({ cursor: 'initial' })}
											style={styles}
										/>
									</ProductAmount>
									<ProductPrice>${product.price * product.quantity}</ProductPrice>
								</PriceDetails>
							</Product>
						))}
						<Hr />
					</Info>

					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 10.00</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -10.00</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type='total'>
							<SummaryItemText>Total </SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<StripeCheckout
							name='Marketplace'
							image='https://cdn.picpng.com/shopping_cart/shopping-cart-internet-71667.png'
							billingAddress
							shippingAddress
							description={`Your total is ${cart.total}`}
							amount={cart.total * 100}
							token={onToken}
							stripeKey={KEY}>
							<Button>CHECKOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer />
		</Container>
	);
};

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
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

const TopTexts = styled.div`
	${mobile({ display: 'none' })}
`;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
	flex: 3;
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 30px 0;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '1.5rem'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #000;
	color: #fff;
	font-weight: 600;

	&:hover {
		cursor: pointer;
	}
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;

	${mobile({ flexDirection: 'column' })}
`;

const ProductDetails = styled.div`
	flex: 2;
	display: flex;
`;

const Image = styled.img`
	width: 200px;
`;

const Details = styled.p`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.span`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductAmount = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;

	${mobile({ margin: '5px 15px' })}
`;

const Amount = styled.span`
	font-size: 1.5rem;
	margin: 5px;
`;

const ProductPrice = styled.span`
	font-size: 1.9rem;

	${mobile({ marginBottom: '20px' })}
`;

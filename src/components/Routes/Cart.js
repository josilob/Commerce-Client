import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import { Announcement } from '../Announcement';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

export const Cart = () => {
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
						<Product>
							<ProductDetails>
								<Image src='https://cdn.modesens.com/media/101365384' />
								<Details>
									<ProductName>
										<b>Product:</b> Nike Raincoat
									</ProductName>
									<ProductID>
										<b>ID:</b> 109257091
									</ProductID>
									<ProductColor color='#7A89CB'></ProductColor>
									<ProductSize>
										<b>Size:</b> L
									</ProductSize>
								</Details>
							</ProductDetails>
							<PriceDetails>
								<ProductAmount>
									<Add />
									<Amount>2</Amount>
									<Remove />
								</ProductAmount>
								<ProductPrice>$75</ProductPrice>
							</PriceDetails>
						</Product>
						<Hr />
						<Product>
							<ProductDetails>
								<Image src='https://i.pinimg.com/originals/99/ae/b3/99aeb39b495a89f00eada7ace83b244c.jpg' />
								<Details>
									<ProductName>
										<b>Product:</b> UnderArmour Golf Pants
									</ProductName>
									<ProductID>
										<b>ID:</b> 839572930
									</ProductID>
									<ProductColor color='#40567F'></ProductColor>
									<ProductSize>
										<b>Size:</b> L
									</ProductSize>
								</Details>
							</ProductDetails>
							<PriceDetails>
								<ProductAmount>
									<Add />
									<Amount>1</Amount>
									<Remove />
								</ProductAmount>
								<ProductPrice>$45</ProductPrice>
							</PriceDetails>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 10</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -10</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type='total'>
							<SummaryItemText>Total </SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
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

const TopTexts = styled.div``;

const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0 10px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
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
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Product = styled.div`
	display: flex;
	justify-content: space-space-between;
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
`;

const Amount = styled.span`
	font-size: 1.5rem;
	margin: 5px;
`;

const ProductPrice = styled.span`
	font-size: 1.9rem;
`;

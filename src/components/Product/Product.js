import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcement from '../Home/Announcement';
import { Footer } from '../Home/Footer';
import { Navbar } from '../Home/Navbar';
import { Newsletter } from '../Home/Newsletter';

export const Product = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
				</ImgContainer>
				<InfoContainer>
					<Title>Denim Jumpsuit</Title>
					<Description>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
						est laborum.
					</Description>
					<Price>$35</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color='black' />
							<FilterColor color='darkblue' />
							<FilterColor color='gray' />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
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
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
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

import styled from 'styled-components';
import Announcement from '../Home/Announcement';
import { Footer } from '../Home/Footer';
import { Navbar } from '../Home/Navbar';
import { Newsletter } from '../Home/Newsletter';
import { Products } from '../Home/Products';

export const ProductList = () => {
	return (
		<Container>
			<Announcement />
			<Navbar />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products</FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>Black</Option>
						<Option>White</Option>
						<Option>Gray</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Orange</Option>
						<Option>Purple</Option>
						<Option>Yellow</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>Small</Option>
						<Option>Medium</Option>
						<Option>Large</Option>
						<Option>Extra Large</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products</FilterText>
					<Select>
						<Option selected>Newest</Option>
						<Option>Price(asc)</Option>
						<Option>Price(desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	);
};

const Container = styled.div``;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Title = styled.h1`
	margin: 20px;
`;

const Filter = styled.div`
	margin: 20px;
`;

const FilterText = styled.span`
	font-size: 1.25rem;
	font-weight: 600;
	margin-right: 20px;
`;

const Select = styled.select`
	padding: 6px;
	margin-right: 20px;
`;

const Option = styled.option``;

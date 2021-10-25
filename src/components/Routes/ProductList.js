import styled from 'styled-components';
import { mobile } from '../../Responsive';
import { Announcement } from '../Announcement';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { Newsletter } from '../Newsletter';
import { Products } from '../Products';

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

	${mobile({ margin: '0 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
	font-size: 1.25rem;
	font-weight: 600;
	margin-right: 20px;

	${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
	padding: 6px;
	margin-right: 20px;

	${mobile({ margin: '10px 0px' })}
`;

const Option = styled.option``;

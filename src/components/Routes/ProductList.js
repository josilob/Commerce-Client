import { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { mobile } from '../../Responsive';
import { Announcement } from '../Announcement';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { Newsletter } from '../Newsletter';
import { Products } from '../Products';

export const ProductList = () => {
	const location = useLocation();
	const category = location.pathname.split('/')[2];
	const [filters, setFilters] = useState({});
	const [sort, setSort] = useState('newest');

	const handleFilters = (e) => {
		setFilters({ ...filters, [e.target.name]: e.target.value });
	};

	return (
		<Container>
			<Announcement />
			<Navbar />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products</FilterText>
					<Select name='color' defaultValue='Color' onChange={handleFilters}>
						<Option disabled>Color</Option>
						<Option>Black</Option>
						<Option>White</Option>
						<Option>Gray</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Orange</Option>
						<Option>Pink</Option>
						<Option>Purple</Option>
						<Option>Yellow</Option>
					</Select>
					<Select name='size' defaultValue='Size' onChange={handleFilters}>
						<Option disabled>Size</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products</FilterText>
					<Select onChange={(e) => setSort(e.target.value)}>
						<Option value='newest'>Newest</Option>
						<Option value='oldest'>Oldest</Option>
						<Option value='asc'>Price(asc)</Option>
						<Option value='desc'>Price(desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products category={category} sort={sort} filters={filters} />
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

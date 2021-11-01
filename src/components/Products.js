import styled from 'styled-components';
import { popularProducts } from '../data';
import { Product } from './Product';

export const Products = ({ category, filters, sort }) => {
	console.log(category, filters, sort);

	const products = popularProducts.map((product) => (
		<Product item={product} key={product.id} />
	));

	return <Container>{products}</Container>;
};

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

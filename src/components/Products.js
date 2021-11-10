import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { popularProducts } from '../data';
import { Product } from './Product';
import { BASE_URL } from '../axios';

export const Products = ({ category, filters, sort }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const link = category
				? `${BASE_URL}products?category=${category}`
				: BASE_URL + 'products';
			try {
				const response = await axios.get(link);
				setProducts(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		getProducts();
		window.scrollTo(0, 0);
	}, [category]);

	useEffect(() => {
		category &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) => item[key].includes(value))
				)
			);
	}, [products, category, filters]);

	useEffect(() => {
		switch (sort) {
			case 'asc':
				setFilteredProducts((filteredProducts) =>
					[...filteredProducts].sort((a, b) => a.price - b.price)
				);
				break;
			case 'desc':
				setFilteredProducts((filteredProducts) =>
					[...filteredProducts].sort((a, b) => b.price - a.price)
				);
				break;
			case 'newest':
				setFilteredProducts((prev) =>
					[...prev].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
				);
				break;
			case 'oldest':
				setFilteredProducts((prev) =>
					[...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
				);
				break;
			default:
				setFilteredProducts((prev) =>
					[...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
				);
		}
	}, [sort]);

	const mappedProducts = filteredProducts.map((product) => (
		<Product item={product} key={product._id} />
	));
	const defaultProducts = products
		.slice(0, 8)
		.map((product) => <Product item={product} key={product._id} />);

	return <Container>{category ? mappedProducts : defaultProducts}</Container>;
};

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

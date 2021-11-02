import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// import { popularProducts } from '../data';
import { Product } from './Product';

export const Products = ({ category, filters, sort }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const link = `http://localhost:27017/products?category=${category}`;
			try {
				const response = await axios.get(link);
				setProducts(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		getProducts();
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
					[...prev].sort((a, b) => a.createdAt - b.createdAt)
				);
				break;
			default:
				setFilteredProducts((prev) =>
					[...prev].sort((a, b) => a.createdAt - b.createdAt)
				);
		}
	}, [sort]);

	console.log(filteredProducts);

	const mappedProducts = filteredProducts.map((product) => (
		<Product item={product} key={product._id} />
	));

	// const mappedProducts = popularProducts.map((product) => (
	// 	<Product item={product} key={product._id} />
	// ));

	return <Container>{mappedProducts}</Container>;
};

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

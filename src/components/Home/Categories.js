import styled from 'styled-components';
import { categories } from '../../data';
import { CategoryItem } from './CategoryItem';

export const Categories = () => {
	const items = categories.map((item) => (
		<CategoryItem item={item} key={item.id} />
	));

	return <Container>{items}</Container>;
};

const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
`;

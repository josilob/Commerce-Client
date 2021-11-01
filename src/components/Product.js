import styled from 'styled-components';
import {
	ShoppingCartOutlined,
	SearchOutlined,
	FavoriteBorderOutlined
} from '@material-ui/icons';

export const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.image} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: opacity 0.5s ease;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: #fff;
	position: absolute;
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	cursor: pointer;
	transition: transform 0.5s ease;

	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

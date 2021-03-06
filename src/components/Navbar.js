import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../Responsive';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../Redux/userSlice';
import { emptyCart } from '../Redux/cartSlice';

export const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	const user = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		window.location.reload();
	};

	return (
		<Container>
			<Wrapper>
				<First>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder='Search' />
						<Search style={{ color: 'gray', fontSize: '1rem' }} />
					</SearchContainer>
				</First>
				<Middle>
					<Link to='/' style={{ textDecoration: 'none', color: 'initial' }}>
						<Logo>Marketplace.</Logo>
					</Link>
				</Middle>
				<Last>
					<Link to='/register' style={{ textDecoration: 'none', color: 'inherit' }}>
						<MenuItem>REGISTER</MenuItem>
					</Link>
					{user ? (
						<MenuItem onClick={handleLogout}>SIGN OUT</MenuItem>
					) : (
						<Link to='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
							<MenuItem>SIGN IN</MenuItem>
						</Link>
					)}
					<Link to='/cart' style={{ textDecoration: 'none', color: 'inherit' }}>
						<MenuItem>
							<Badge badgeContent={quantity} color='primary'>
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</Link>
				</Last>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	height: 60px;

	${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
	padding: 0.7rem 1.2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	${mobile({ padding: '10px 0' })}
`;

const First = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Middle = styled.div`
	flex: 1;
	text-align: center;
`;
const Last = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	${mobile({ flex: 2, justifyContent: 'center' })}
`;

const Logo = styled.h1`
	font-weight: bold;

	${mobile({ fontSize: '1.1rem' })}
`;

const Language = styled.span`
	font-size: 0.9rem;
	cursor: pointer;

	${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 24px;
	padding: 8px;

	${mobile({ marginLeft: '4px', padding: '3px' })}
`;

const Input = styled.input`
	border: none;

	${mobile({ width: '50px', padding: 0 })}
`;

const MenuItem = styled.div`
	font-size: 0.9rem;
	cursor: pointer;
	margin-left: 1.75rem;

	transition: color, transform 0.25s ease-in-out;
	&:hover {
		color: #0e6caf;
		transform: scale(1.1);
	}

	${mobile({ fontSize: '.7rem', marginLeft: '6px' })}
`;

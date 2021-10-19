import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

export const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<First>
					<Language>EN</Language>
					<SearchContainer>
						<Input /> <Search style={{ color: 'gray', fontSize: '1rem' }} />
					</SearchContainer>
				</First>
				<Middle>
					<Logo>Marketplace.</Logo>
				</Middle>
				<Last>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color='primary'>
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Last>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	height: 4rem;
`;

const Wrapper = styled.div`
	padding: 0.7rem 1.2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
`;

const Logo = styled.h1`
	font-weight: bold;
`;

const Language = styled.span`
	font-size: 0.9rem;
	cursor: pointer;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 1.5rem;
	padding: 0.3rem;
`;

const Input = styled.input`
	border: none;
`;

const MenuItem = styled.div`
	font-size: 0.9rem;
	cursor: pointer;
	margin-left: 1.75rem;
`;

import React from 'react';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';

export const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<First>
					<Language>EN</Language>
					<SearchContainer>
						<Input /> <Search />
					</SearchContainer>
				</First>
				<Middle>
					<Logo>Marketplace.</Logo>
				</Middle>
				<Last>Right</Last>
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

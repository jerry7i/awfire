import React from 'react'
import styled from "styled-components";

const HeaderWrapper = styled.div`
	position: top;
	width: 100%;
	top: 0px;
	text-align: center;
  padding: 10px;
  color: #222;
  background-color: #222;
  z-index: 99;
`;

const HeaderText = styled.h1`
	display: inline-block;
	color: #fff
`;

const Header = () => (
	<HeaderWrapper>
		<HeaderText>
			AWFire Protection Inc.
		</HeaderText>
	</HeaderWrapper>
);


export default Header;
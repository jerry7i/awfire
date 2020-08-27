import React from "react";
import styled from "styled-components";

const LandingWrapper = styled.section`
	display: flex;
	align-items: center;
	margin-bottom: 1000px;
`
const Title = styled.h2`
	color: #000;
`;

const Landing = () => (
	<LandingWrapper>
		<Title>
			Landing
		</Title>
	</LandingWrapper>
);


export default Landing;
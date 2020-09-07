import React from "react";
import styled from "styled-components";

import Showcase from "./Showcase";
import Services from "./Services";

const LandingContainer = styled.section`
	display: block;
	margin-top: 100px;
`;

const Landing = () => (
	<LandingContainer>
		<Showcase />
		<Services />
	</LandingContainer>
);


export default Landing;
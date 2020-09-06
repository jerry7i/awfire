import React from "react";
import styled from "styled-components";

import Showcase from "./Showcase";
import Services from "./Services";

const LandingContainer = styled.section`
	display: block;
`;

const Landing = () => (
	<LandingContainer>
		<Showcase />
		<Services />
	</LandingContainer>
);


export default Landing;
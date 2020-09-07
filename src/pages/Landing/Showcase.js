import React from "react";
import styled from "styled-components";
import { device } from "../../device";

import ContentWrapper from "../../components/ContentWrapper";
import showcaseBg from "../../images/fire_system_inspection.jpg";

const ShowcaseContentWrapper = styled(ContentWrapper)`
	display: flex;
	align-items: center;
	height: inherit;
`;

const ShowcaseContainer = styled.div`
	background-image: url(${showcaseBg});
	background-size: cover;
	background-position: 30% 0;
	background-repeat: no-repeat;

	@media ${device.mobileS} {
		height: 400px;
		h1 {
			font-size: 25px;
		}
	}

	@media ${device.mobileL} {
		height: 450px;
		h1 {
			font-size: 30px;
		}
	}

	@media ${device.tablet} {
		height: 550px;
		h1 {
			font-size: 40px;
		}
	}

	@media ${device.laptop} {
		height: 700px;
		background-position: 0% -50px;
		h1 {
			font-size: 50px;
		}
	}

	@media ${device.desktop} {
		height: 900px;
		background-position: 0% -50px;
		h1 {
			font-size: 60px;
		}
	}
`;

const BigText = styled.h1`
	flex: 1;
	font-size: 40px;
	color: #fff;
	text-shadow: 2.5px 2.5px 0 #ff6347;
`;

// to be modified
const ShowcaseSmallText = styled.p`
	flex: 1;
`;

const Showcase = () => (
  <ShowcaseContainer>
    <ShowcaseContentWrapper>
      <div>
        <BigText>
          Site currently under construction
        </BigText>
      </div>
    </ShowcaseContentWrapper>
  </ShowcaseContainer>
);

export default Showcase;
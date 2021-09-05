import React, { FC } from 'react';
import * as Styles from './SocialAuth.styles';

import Apple from 'Assets/Logos/Apple.svg';
import Google from 'Assets/Logos/Google.svg';
import Facebook from 'Assets/Logos/Facebook.svg';
import Twitter from 'Assets/Logos/Twitter.svg';
import Responsive from 'Utils/Responsive';

const AppleDimensions = Responsive.h(2.5);
const GoogleDimensions = Responsive.h(3);
const FacebookDimensions = Responsive.h(3);
const TwitterDimensions = Responsive.h(2.5);

interface SocialAuthProps {}

const SocialAuth: FC = () => {
	return (
		<Styles.Container>
			<Styles.SocialContainer dimensions={Responsive.hpx(6)} colour="#DADADA">
				<Apple width={AppleDimensions} height={AppleDimensions} style={Styles.Apple} />
			</Styles.SocialContainer>

			<Styles.SocialContainer dimensions={Responsive.hpx(6)} colour="#fff">
				<Google width={GoogleDimensions} height={GoogleDimensions} />
			</Styles.SocialContainer>

			<Styles.SocialContainer dimensions={Responsive.hpx(6)} colour="#1877f2">
				<Facebook width={FacebookDimensions} height={FacebookDimensions} style={Styles.Facebook} />
			</Styles.SocialContainer>

			<Styles.SocialContainer dimensions={Responsive.hpx(6)} colour="#1DA1F2">
				<Twitter width={TwitterDimensions} height={TwitterDimensions} />
			</Styles.SocialContainer>
		</Styles.Container>
	);
};

export default SocialAuth;

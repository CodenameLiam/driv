import React, { FC } from 'react';
import * as Styles from './SocialAuth.styles';

import Apple from 'Assets/Logos/Apple.svg';
import Google from 'Assets/Logos/Google.svg';
import Facebook from 'Assets/Logos/Facebook.svg';
import Twitter from 'Assets/Logos/Twitter.svg';
import Responsive from 'Utils/Responsive';
import useSocialAuth from 'Hooks/useSocialAuth';
import Loading from 'Components/Loading/Loading';
import { Platform } from 'react-native';

const AppleDimensions = Responsive.h(2.5);
const GoogleDimensions = Responsive.h(3);
const FacebookDimensions = Responsive.h(3);
const TwitterDimensions = Responsive.h(2.5);

const SocialAuth: FC = () => {
	const { showSpinner, handleSocialPress } = useSocialAuth();

	return (
		<Styles.Container>
			<Loading visible={showSpinner} />

			{Platform.OS === 'ios' && (
				<Styles.SocialContainer
					dimensions={Responsive.hpx(6)}
					colour="#000"
					onPress={() => handleSocialPress('apple')}
				>
					<Apple width={AppleDimensions} height={AppleDimensions} style={Styles.Apple} />
				</Styles.SocialContainer>
			)}

			<Styles.SocialContainer
				dimensions={Responsive.hpx(6)}
				colour="#fff"
				onPress={() => handleSocialPress('google')}
			>
				<Google width={GoogleDimensions} height={GoogleDimensions} />
			</Styles.SocialContainer>

			<Styles.SocialContainer
				dimensions={Responsive.hpx(6)}
				colour="#1877f2"
				onPress={() => handleSocialPress('facebook')}
			>
				<Facebook width={FacebookDimensions} height={FacebookDimensions} style={Styles.Facebook} />
			</Styles.SocialContainer>

			{/* <Styles.SocialContainer dimensions={Responsive.hpx(6)} colour="#1DA1F2">
				<Twitter width={TwitterDimensions} height={TwitterDimensions} />
			</Styles.SocialContainer> */}
		</Styles.Container>
	);
};

export default SocialAuth;

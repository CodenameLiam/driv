import React, { FC } from 'react';
import Spinner from 'react-native-spinkit';
import { default as Overlay, SpinnerProps } from 'react-native-loading-spinner-overlay';
import Colours from 'Theme/Colours';
import Responsive from 'Utils/Responsive';

const Loading: FC<SpinnerProps> = ({ ...rest }) => {
	return (
		<Overlay
			{...rest}
			overlayColor={Colours.overlay}
			customIndicator={<Spinner size={Responsive.h(5)} type="ThreeBounce" color={Colours.white} />}
		/>
	);
};

export default Loading;

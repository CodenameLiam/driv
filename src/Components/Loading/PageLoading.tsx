import React, { FC } from 'react';
import Spinner from 'react-native-spinkit';
import Colours from 'Theme/Colours';
import Responsive from 'Utils/Responsive';
import * as Styles from './Loading.styles';

const PageLoading: FC = () => {
	return (
		<Styles.Container>
			<Spinner size={Responsive.h(5)} type="ThreeBounce" color={Colours.primary} />
		</Styles.Container>
	);
};

export default PageLoading;

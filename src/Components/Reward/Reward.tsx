import React, { FC, useEffect, useState } from 'react';
import { RewardObject } from 'Types/Rewards';
import * as Styles from './Reward.styles';
import storage from '@react-native-firebase/storage';
import Spinner from 'react-native-spinkit';
import Responsive from 'Utils/Responsive';
import Colours from 'Theme/Colours';
import { Linking } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface RewardProps {
	reward: RewardObject;
}

const Reward: FC<RewardProps> = ({ reward }) => {
	const { image, link } = reward;
	const [loading, setLoading] = useState(true);
	const [uri, setUri] = useState<string>();

	useEffect(() => {
		(async () => {
			const _uri = await storage().ref(image).getDownloadURL();
			setUri(_uri);
			setLoading(false);
		})();
	}, [image]);

	const handleOpen = async (url: string): Promise<void> => {
		const supported = await Linking.canOpenURL(url);
		if (supported) {
			Linking.openURL(url);
		} else {
			console.error("Don't know how to open URI: " + url);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={() => handleOpen(link)}>
			<Styles.Container>
				{loading ? (
					<Spinner size={Responsive.h(5)} type="ThreeBounce" color={Colours.Greys.GREY2} />
				) : (
					<Styles.RewardImage source={{ uri: uri }} resizeMode="contain" />
				)}
			</Styles.Container>
		</TouchableWithoutFeedback>
	);
};

export default Reward;

import Icon from 'Components/Icon/Icon';
import { useUser } from 'Context/AppContext';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { FlatList, Platform, ScrollView, StatusBar, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colours from 'Theme/Colours';
import { BodyFont } from 'Theme/Fonts';
import { Full } from 'Theme/Global';
import { InteractionObject, InteractionType } from 'Types/Interaction';
import Responsive from 'Utils/Responsive';
import * as Styles from './TimelineScreen.styles';
import moment from 'moment';
import { toSentence } from 'Utils/String';
import { getInteractionColour } from 'Utils/Colour';
import API from 'API/API';
import PageLoading from 'Components/Loading/PageLoading';

const TimelineScreen: FC = () => {
	const [user] = useUser();
	const [loading, setLoading] = useState(true);
	const [interactions, setInteractions] = useState<InteractionObject[]>([]);

	useEffect(() => {
		(async () => {
			if (user?.data?.rego) {
				const _interactions: InteractionObject[] = [];
				const docRef = await API.intereactions.get(user.data.rego);
				docRef.forEach(doc => {
					_interactions.push(doc.data() as InteractionObject);
				});
				_interactions.sort((a, b) => a.date.seconds - b.date.seconds);

				setInteractions(_interactions);
			}
			setLoading(false);
		})();
	}, [user?.data?.rego]);

	const positive = useMemo(() => interactions.filter(i => i.type === InteractionType.Positive), [interactions]);
	const negative = useMemo(() => interactions.filter(i => i.type === InteractionType.Negative), [interactions]);
	const warning = useMemo(() => interactions.filter(i => i.type === InteractionType.Warning), [interactions]);

	if (loading) {
		return <PageLoading />;
	}

	return (
		<SafeAreaView style={Full}>
			<StatusBar barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'} />
			<Styles.Container>
				<Styles.InfoContainer>
					{user?.user?.photoURL ? (
						<Styles.Picture source={{ uri: user.user.photoURL }} />
					) : (
						<Styles.PicturePlaceholder>
							<Icon
								family="fontawesome"
								name="camera"
								size={Responsive.h(2.5)}
								colour={Colours.Greys.GREY2}
							/>
						</Styles.PicturePlaceholder>
					)}
					<Styles.TextContainer>
						<Styles.Name>{user?.user?.displayName}</Styles.Name>
						<Styles.RegoTile>
							<BodyFont colour={Colours.green}>{user?.data?.rego}</BodyFont>
						</Styles.RegoTile>
					</Styles.TextContainer>
				</Styles.InfoContainer>

				<Styles.InteractionAllContainer>
					<Styles.InteractionContainer colour={Colours.green}>
						<Styles.Title colour={Colours.green}>Positives</Styles.Title>
						<Styles.Number colour={Colours.green}>{positive.length}</Styles.Number>
					</Styles.InteractionContainer>
					<Styles.InteractionContainer colour={Colours.orange}>
						<Styles.Title colour={Colours.orange}>Negatives</Styles.Title>
						<Styles.Number colour={Colours.orange}>{negative.length}</Styles.Number>
					</Styles.InteractionContainer>
					<Styles.InteractionContainer colour={Colours.red}>
						<Styles.Title colour={Colours.red}>Warnings</Styles.Title>
						<Styles.Number colour={Colours.red}>{warning.length}</Styles.Number>
					</Styles.InteractionContainer>
				</Styles.InteractionAllContainer>

				<Styles.InteractionRow>
					<Styles.InteractionCell flex={1.6}>
						<Styles.InteractionHeaderFont>Interaction</Styles.InteractionHeaderFont>
					</Styles.InteractionCell>
					<Styles.InteractionCell flex={1.5}>
						<Styles.InteractionHeaderFont>Date</Styles.InteractionHeaderFont>
					</Styles.InteractionCell>
					<Styles.InteractionCell flex={1.4}>
						<Styles.InteractionHeaderFont>Time</Styles.InteractionHeaderFont>
					</Styles.InteractionCell>
				</Styles.InteractionRow>
				<FlatList
					data={interactions}
					renderItem={({ item, index }) => (
						<Styles.InteractionRow isOdd={index % 2 === 0}>
							<Styles.InteractionCell flex={1.6}>
								<Styles.InteractionBodyFont colour={getInteractionColour(item.type)}>
									{toSentence(item.type)}
								</Styles.InteractionBodyFont>
							</Styles.InteractionCell>
							<Styles.InteractionCell flex={1.5}>
								<Styles.InteractionBodyFont>
									{moment(item.date.seconds * 1000).format('ll')}
								</Styles.InteractionBodyFont>
							</Styles.InteractionCell>
							<Styles.InteractionCell flex={1.4}>
								<Styles.InteractionBodyFont>
									{moment(item.date.seconds * 1000).format('h:mm a')}
								</Styles.InteractionBodyFont>
							</Styles.InteractionCell>
						</Styles.InteractionRow>
					)}
				/>
			</Styles.Container>
		</SafeAreaView>
	);
};

export default TimelineScreen;

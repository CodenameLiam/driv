import { useNavigation } from '@react-navigation/core';
import { useName, useUser } from 'Context/AppContext';
import { TabNavProps } from 'Navigation/AppNavigation/AppNavigation.params';
import React, { FC, Fragment, useEffect, useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { BodyFont } from 'Theme/Fonts';
import * as Styles from './ProfileScreen.styles';
import Icon from 'Components/Icon/Icon';
import Colours from 'Theme/Colours';
import Responsive from 'Utils/Responsive';
import API from 'API/API';
import Interaction from 'Components/Interaction/Interaction';
import {
	InteractionNegative,
	InteractionObject,
	InteractionPositive,
	InteractionSubType,
	InteractionType,
} from 'Types/Interaction';
import { ScrollView } from 'react-native-gesture-handler';
import PageLoading from 'Components/Loading/PageLoading';
import { InteractionMap } from 'Types/Attributes';

const groupBy = <K, V>(list: Array<V>, keyGetter: (input: V) => K): Map<K, Array<V>> => {
	const map = new Map<K, Array<V>>();
	list.forEach(item => {
		const key = keyGetter(item);
		const collection = map.get(key);
		if (!collection) {
			map.set(key, [item]);
		} else {
			collection.push(item);
		}
	});
	return map;
};

interface SortedInteraction {
	interaction: InteractionSubType;
	length: number;
}

const getSortedPositiveInteractions = (interactions: InteractionObject[]): SortedInteraction[] => {
	const grouped = groupBy(interactions, input => input.subType);
	const sorted = Object.values(InteractionPositive)
		.map(interaction => ({
			interaction,
			length: grouped.get(interaction)?.length ?? 0,
		}))
		.sort((a, b) => b.length - a.length)
		.filter(interaction => interaction.length > 0);

	return sorted;
};

const getSortedNegativeInteractions = (interactions: InteractionObject[]): SortedInteraction[] => {
	const grouped = groupBy(interactions, input => input.subType);
	const sorted = Object.values(InteractionNegative)
		.map(interaction => ({
			interaction,
			length: grouped.get(interaction)?.length ?? 0,
		}))
		.sort((a, b) => b.length - a.length)
		.filter(interaction => interaction.length > 0);

	return sorted;
};

const ProfileScreen: FC = () => {
	const [user] = useUser();
	const [name] = useName();
	const [loading, setLoading] = useState(true);

	// Interaction state
	const [interactionsToday, setInteractionsToday] = useState<InteractionObject[]>([]);
	const [interactionsMonth, setInteractionsMonth] = useState<InteractionObject[]>([]);

	const dailyPositive = useMemo(
		() => interactionsToday.filter(i => i.type === InteractionType.Positive),
		[interactionsToday],
	);
	const dailyNegative = useMemo(
		() => interactionsToday.filter(i => i.type === InteractionType.Negative),
		[interactionsToday],
	);
	const dailyWarning = useMemo(
		() => interactionsToday.filter(i => i.type === InteractionType.Warning),
		[interactionsToday],
	);
	const monthlyPositive = useMemo(
		() => interactionsMonth.filter(i => i.type === InteractionType.Positive),
		[interactionsMonth],
	);
	const monthlyNegative = useMemo(
		() => interactionsMonth.filter(i => i.type === InteractionType.Negative),
		[interactionsMonth],
	);

	const monthlyPositiveSorted = useMemo(() => getSortedPositiveInteractions(monthlyPositive), [monthlyPositive]);
	const monthlyNegativeSorted = useMemo(() => getSortedNegativeInteractions(monthlyNegative), [monthlyNegative]);

	useEffect(() => {
		(async () => {
			if (user?.data?.rego) {
				// Create arrays
				const _interactionsToday: InteractionObject[] = [];
				const _interactionsMonth: InteractionObject[] = [];
				// Create dates
				const today = new Date();
				const month = new Date();
				today.setDate(today.getDate() - 1);
				month.setDate(month.getDate() - 30);
				// Fetch Data
				const docRefToday = await API.interactions.getByDate(user.data.rego, today);
				docRefToday.forEach(doc => {
					_interactionsToday.push(doc.data() as InteractionObject);
				});
				const docRefMonth = await API.interactions.getByDate(user.data.rego, month);
				docRefMonth.forEach(doc => {
					_interactionsMonth.push(doc.data() as InteractionObject);
				});
				// Set data
				setInteractionsToday(_interactionsToday);
				setInteractionsMonth(_interactionsMonth);
			}
			setLoading(false);
		})();
	}, [user?.data?.rego]);

	if (loading) {
		return <PageLoading />;
	}

	return (
		<ScrollView>
			<Styles.Container>
				<Styles.InfoContainer>
					<TouchableOpacity>
						{user?.user?.photoURL ? (
							<Styles.Picture source={{ uri: user.user.photoURL }} />
						) : (
							<Styles.PicturePlaceholder>
								<Icon
									family="fontawesome"
									name="camera"
									size={Responsive.h(4)}
									colour={Colours.Greys.GREY2}
								/>
							</Styles.PicturePlaceholder>
						)}
					</TouchableOpacity>
					<Styles.InfoTextContainer>
						<Styles.Name>{user?.user?.displayName ?? name}</Styles.Name>
						<Styles.Stars>
							<BodyFont>{user?.data?.rank && Math.round(user.data.rank * 10) / 10}</BodyFont>
							<Icon
								family="fontawesome"
								name="star"
								colour={Colours.black}
								size={Responsive.h(2)}
								style={Styles.StarIcon}
							/>
						</Styles.Stars>
					</Styles.InfoTextContainer>
				</Styles.InfoContainer>
				<Styles.RowHeader>
					<Styles.Name>Registration:</Styles.Name>
					<Styles.RegoTile colour={Colours.green}>
						<BodyFont colour={Colours.green}>{user?.data?.rego}</BodyFont>
					</Styles.RegoTile>
				</Styles.RowHeader>
				<Styles.RowHeader>
					<Styles.Name>Interactions:</Styles.Name>
				</Styles.RowHeader>
				<Styles.InteractionContainer>
					<Interaction title="Daily positives" number={dailyPositive.length} colour={Colours.green} />
					<Interaction title="Daily negatives" number={dailyNegative.length} colour={Colours.orange} />
					<Interaction title="Daily warnings" number={dailyWarning.length} colour={Colours.red} />
				</Styles.InteractionContainer>

				{monthlyPositiveSorted.length > 0 && (
					<Fragment>
						<Styles.RowHeader>
							<Styles.Name>Strong attributes:</Styles.Name>
						</Styles.RowHeader>
						<Styles.RowContent>
							{monthlyPositiveSorted.slice(0, 3).map(sortedInteration => (
								<Styles.AttributeTile key={sortedInteration.interaction} colour={Colours.green}>
									<BodyFont colour={Colours.green}>
										{InteractionMap.POSITIVE[sortedInteration.interaction as InteractionPositive]}
									</BodyFont>
								</Styles.AttributeTile>
							))}
						</Styles.RowContent>
					</Fragment>
				)}
				{monthlyNegativeSorted.length > 0 && (
					<Fragment>
						<Styles.RowHeader>
							<Styles.Name>Work on:</Styles.Name>
						</Styles.RowHeader>
						<Styles.RowContent>
							{monthlyNegativeSorted.slice(0, 3).map(sortedInteration => (
								<Styles.AttributeTile key={sortedInteration.interaction} colour={Colours.orange}>
									<BodyFont colour={Colours.orange}>
										{InteractionMap.NEGATIVE[sortedInteration.interaction as InteractionNegative]}
									</BodyFont>
								</Styles.AttributeTile>
							))}
						</Styles.RowContent>
					</Fragment>
				)}
			</Styles.Container>
		</ScrollView>
	);
};

export default ProfileScreen;

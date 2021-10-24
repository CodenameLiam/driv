import { useFocusEffect } from '@react-navigation/core';
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import * as Styles from './HomeScreen.styles';
import Interaction from 'Components/Interaction/Interaction';
import Colours from 'Theme/Colours';
import useLocation from 'Hooks/useLocation';
import API from 'API/API';
import { InteractionObject, InteractionType } from 'Types/Interaction';
import { useRefresh } from 'Context/AppContext';
import { RewardObject } from 'Types/Rewards';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import Reward from 'Components/Reward/Reward';
import PageLoading from 'Components/Loading/PageLoading';
import moment from 'moment';

const HomeScreen: FC = () => {
	const [refresh, setRefresh] = useRefresh();
	const [loadingRewards, setLoadingRewards] = useState(true);
	const [loadingInteractions, setLoadingInteractions] = useState(true);
	const { position, locationGranted } = useLocation();
	const [rewards, setRewards] = useState<RewardObject[]>([]);
	const [todayNearMe, setTodayNearMe] = useState<InteractionObject[]>([]);
	const [yesterdayNearMe, setYesterdayNearMe] = useState<InteractionObject[]>([]);

	const todayPositive = useMemo(() => todayNearMe.filter(i => i.type === InteractionType.Positive), [todayNearMe]);
	const todayNegative = useMemo(() => todayNearMe.filter(i => i.type === InteractionType.Negative), [todayNearMe]);
	const todayWarning = useMemo(() => todayNearMe.filter(i => i.type === InteractionType.Warning), [todayNearMe]);

	const yesterdayPositive = useMemo(
		() => yesterdayNearMe.filter(i => i.type === InteractionType.Positive),
		[yesterdayNearMe],
	);
	const yesterdayNegative = useMemo(
		() => yesterdayNearMe.filter(i => i.type === InteractionType.Negative),
		[yesterdayNearMe],
	);
	const yesterdayWarning = useMemo(
		() => yesterdayNearMe.filter(i => i.type === InteractionType.Warning),
		[yesterdayNearMe],
	);

	const getRewards = useCallback(async () => {
		const _rewards = await API.rewards.get();
		setRewards(_rewards);
		setLoadingRewards(false);
	}, []);

	const getNearbyIntrations = useCallback(async (): Promise<void> => {
		try {
			if (position) {
				const _todayNearMe = await API.interactions.getByLocation(moment(), position);
				const _yesterdayNearMe = await API.interactions.getByLocation(moment().subtract(1, 'day'), position);
				setTodayNearMe(_todayNearMe as InteractionObject[]);
				setYesterdayNearMe(_yesterdayNearMe as InteractionObject[]);
				setLoadingInteractions(false);
			}
		} catch (error) {
			console.error(error);
			setLoadingInteractions(false);
		}
	}, [position]);

	useEffect(() => {
		getRewards();
		getNearbyIntrations();
	}, [getRewards, getNearbyIntrations]);

	useFocusEffect(
		useCallback(() => {
			refresh && getNearbyIntrations();
			setRefresh(false);
		}, [getNearbyIntrations, refresh, setRefresh]),
	);

	if (loadingInteractions || loadingRewards) {
		return <PageLoading />;
	}

	return (
		<ScrollView>
			<Styles.Container>
				<Styles.Title>Rewards</Styles.Title>
				<Carousel
					activeSlideAlignment="start"
					data={rewards}
					sliderWidth={Dimensions.get('screen').width}
					itemWidth={Dimensions.get('screen').width * 0.8}
					renderItem={({ item }) => <Reward reward={item} />}
				/>

				<Styles.RowHeader>
					<Styles.Title>Today Near Me:</Styles.Title>
				</Styles.RowHeader>
				<Styles.InteractionContainer>
					<Interaction title="Daily positives" number={todayPositive.length} colour={Colours.green} />
					<Interaction title="Daily negatives" number={todayNegative.length} colour={Colours.orange} />
					<Interaction title="Daily warnings" number={todayWarning.length} colour={Colours.red} />
				</Styles.InteractionContainer>
				<Styles.RowHeader>
					<Styles.Title>Yesterday Near Me:</Styles.Title>
				</Styles.RowHeader>
				<Styles.InteractionContainer>
					<Interaction title="Daily positives" number={yesterdayPositive.length} colour={Colours.green} />
					<Interaction title="Daily negatives" number={yesterdayNegative.length} colour={Colours.orange} />
					<Interaction title="Daily warnings" number={yesterdayWarning.length} colour={Colours.red} />
				</Styles.InteractionContainer>
			</Styles.Container>
		</ScrollView>
	);
};

export default HomeScreen;

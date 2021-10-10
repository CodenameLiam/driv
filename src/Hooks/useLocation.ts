import { useEffect, useState } from 'react';
import { Platform, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

interface UseLocation {
	locationGranted: boolean;
	position?: Geolocation.GeoPosition;
}

const useLocation = (): UseLocation => {
	const [locationGranted, setLocationGranted] = useState(false);
	const [position, setPosition] = useState<Geolocation.GeoPosition>();

	useEffect(() => {
		(async () => {
			if (Platform.OS === 'android') {
				const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
				setLocationGranted(granted === 'granted');
			}
			if (Platform.OS === 'ios') {
				const granted = await Geolocation.requestAuthorization('whenInUse');
				setLocationGranted(granted === 'granted');
			}
		})();
	}, []);

	useEffect(() => {
		if (locationGranted) {
			Geolocation.getCurrentPosition(
				_position => {
					setPosition(_position);
				},
				error => {
					console.error(error.code, error.message);
				},
				{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
			);
		}
	}, [locationGranted]);

	return { locationGranted, position };
};

export default useLocation;

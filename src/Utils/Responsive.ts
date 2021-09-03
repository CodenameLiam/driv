import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const Responsive = {
	w: (width: string | number) => widthPercentageToDP(width),
	h: (height: string | number) => heightPercentageToDP(height),
	wpx: (width: string | number) => widthPercentageToDP(width) + 'px',
	hpx: (height: string | number) => heightPercentageToDP(height) + 'px',
};

export default Responsive;

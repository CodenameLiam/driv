import React, { useState } from 'react';
import { ViewProps } from 'react-native';
import * as styles from './Block.styles';

export interface BlockProps extends ViewProps {
	marginVertical?: number;
	marginHoriztonal?: number;
	marginTop?: number;
	marginBottom?: number;
	marginLeft?: number;
	marginRight?: number;
	px?: boolean;
	flex?: number;
	fullWidth?: boolean;
}

const Block: React.FC<BlockProps> = ({ children, ...rest }) => {
	return <styles.Container {...rest}>{children}</styles.Container>;
};

export default Block;

import styled, { css } from '@emotion/native';
import { BlockProps } from './Block';

export const Container = styled.View<BlockProps>`
	display: flex;
	${({ fullWidth }) => (fullWidth ? 'width: 100%' : '')};
	flex: ${({ flex }) => flex ?? 0};
	margin-top: ${props => `${props.marginTop || props.marginVertical || 0}${props.px ? 'px' : '%'}`};
	margin-bottom: ${props => `${props.marginBottom || props.marginVertical || 0}${props.px ? 'px' : '%'}`};
	margin-left: ${props => `${props.marginLeft || props.marginHoriztonal || 0}${props.px ? 'px' : '%'}`};
	margin-right: ${props => `${props.marginRight || props.marginHoriztonal || 0}${props.px ? 'px' : '%'}`};
`;

import { VStack, VStackProps } from '@react-native-material/core';

import styled, { css } from 'styled-components/native';

const gridStyles = css<{ spacing?: number }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${(props) => (props.spacing ? props.spacing : 0)}px;
  background-color: #3e3f3e;
`;

const itemStyles = css`
  flex: 1;
  background-color: #da1212;
`;

export const GridContainer = styled(VStack)<{
  container?: boolean;
  item?: boolean;
  spacing?: number;
  sx?: VStackProps['style'] | any;
}>`
  ${({ container, item, sx }) => {
    if (container) return [gridStyles, sx];

    if (item) return [itemStyles, sx];

    return [gridStyles, sx];
  }}
`;

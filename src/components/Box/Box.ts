import {
  color,
  ColorProps,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  border,
  BorderProps,
  flexbox,
  FlexboxProps,
} from 'styled-system';
import styled from 'styled-components';
import React from 'react';

interface IProps
  extends ColorProps,
    SpaceProps,
    LayoutProps,
    ShadowProps,
    BorderProps,
    FlexboxProps {
  children: React.ReactNode;
}

const Box = styled.div<IProps>`
  ${color};
  ${space};
  ${layout};
  ${shadow};
  ${border};
  ${flexbox};
`;

export default Box;

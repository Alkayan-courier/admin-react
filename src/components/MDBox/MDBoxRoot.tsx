/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// src/types.ts

// export interface OwnerState {
//   variant?: string;
//   bgColor?: string;
//   color?: string;
//   opacity?: number;
//   borderRadius?: string;
//   shadow?: string;
//   coloredShadow?: string;
// }

// @mui material components
import Box, { BoxProps } from '@mui/material/Box';
import { CSSObject, Palette, PaletteColor, styled } from '@mui/material/styles';
import { BoxOwnerState } from 'types';

// interface StyleProps {
//   theme: Theme;
//   ownerState: OwnerState;
// }

interface CustomBoxProps extends BoxProps {
  ownerState: BoxOwnerState;
}

export default styled(Box)<CustomBoxProps>(({ theme, ownerState }): CSSObject => {
  const { palette, functions, borders, boxShadows } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;

  const { gradients, grey, white } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;
  const { colored } = boxShadows;

  const greyColors = {
    'grey-100': grey[100],
    'grey-200': grey[200],
    'grey-300': grey[300],
    'grey-400': grey[400],
    'grey-500': grey[500],
    'grey-600': grey[600],
    'grey-700': grey[700],
    'grey-800': grey[800],
    'grey-900': grey[900],
  };

  const validGradients = [
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'dark',
    'light',
  ];

  const validColors = [
    'transparent',
    'white',
    'black',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
    'text',
    'grey-100',
    'grey-200',
    'grey-300',
    'grey-400',
    'grey-500',
    'grey-600',
    'grey-700',
    'grey-800',
    'grey-900',
  ];

  const validBorderRadius = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'section'];
  const validBoxShadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'inset'];

  // background value
  let backgroundValue = bgColor;
  if (bgColor) {
    if (variant === 'gradient') {
      backgroundValue = validGradients.find((el) => el === bgColor)
        ? linearGradient(
            gradients[bgColor as keyof typeof gradients].main,
            gradients[bgColor as keyof typeof gradients].state
          )
        : white.main;
    } else if (validColors.find((el) => el === bgColor)) {
      backgroundValue = palette[bgColor as keyof Palette]
        ? (palette[bgColor as keyof Palette] as PaletteColor).main
        : greyColors[bgColor as keyof typeof greyColors];
    } else {
      backgroundValue = bgColor;
    }
  }
  // color value
  let colorValue = color;

  if (validColors.find((el) => el === color)) {
    colorValue = palette[color as keyof Palette]
      ? (palette[color as keyof Palette] as PaletteColor).main
      : greyColors[color as keyof typeof greyColors];
  }

  // borderRadius value
  let borderRadiusValue = borderRadius;
  if (borderRadius) {
    if (validBorderRadius.find((el) => el === borderRadius)) {
      borderRadiusValue = radius[borderRadius as keyof typeof radius];
    }
  }

  // boxShadow value
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let boxShadowValue: any = 'none';
  if (shadow && coloredShadow) {
    if (validBoxShadows.find((el) => el === shadow)) {
      boxShadowValue = boxShadows[shadow as keyof typeof boxShadows];
    } else if (coloredShadow) {
      boxShadowValue = colored[coloredShadow as keyof typeof colored]
        ? colored[coloredShadow as keyof typeof colored]
        : 'none';
    }
  }
  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});

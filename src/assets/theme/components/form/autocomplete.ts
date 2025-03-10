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

// Material Dashboard 2 React base styles
import boxShadows from 'assets/theme/base/boxShadows';
import { baseProperties } from 'assets/theme/base/typography';
import colors from 'assets/theme/base/colors';
import borders from 'assets/theme/base/borders';

// Material Dashboard 2 React helper functions
import pxToRem from 'assets/theme/functions/pxToRem';
import { ComponentType } from 'types';

const { lg } = boxShadows;
const { text, white, transparent, light, dark, gradients } = colors;
const { borderRadius } = borders;

const autocomplete: ComponentType<'MuiAutocomplete'> = {
  styleOverrides: {
    popper: {
      boxShadow: lg,
      padding: pxToRem(8),
      fontSize: baseProperties.fontSizeSM,
      color: text.primary,
      textAlign: 'left',
      backgroundColor: `${white.main} !important`,
      borderRadius: borderRadius.md,
    },

    paper: {
      boxShadow: 'none',
      backgroundColor: transparent.main,
    },

    option: {
      padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
      borderRadius: borderRadius.md,
      fontSize: baseProperties.fontSizeSM,
      color: text.primary,
      transition: 'background-color 300ms ease, color 300ms ease',

      '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
        backgroundColor: light.main,
        color: dark.main,
      },

      '&[aria-selected="true"]': {
        backgroundColor: `${light.main} !important`,
        color: `${dark.main} !important`,
      },
    },

    noOptions: {
      fontSize: baseProperties.fontSizeSM,
      color: text.primary,
    },

    groupLabel: {
      color: dark.main,
    },

    loading: {
      fontSize: baseProperties.fontSizeSM,
      color: text.primary,
    },

    tag: {
      display: 'flex',
      alignItems: 'center',
      height: 'auto',
      padding: pxToRem(4),
      backgroundColor: gradients.dark.state,
      color: white.main,

      '& .MuiChip-label': {
        lineHeight: 1.2,
        padding: `0 ${pxToRem(10)} 0 ${pxToRem(4)}`,
      },

      '& .MuiSvgIcon-root, & .MuiSvgIcon-root:hover, & .MuiSvgIcon-root:focus': {
        color: white.main,
        marginRight: 0,
      },
    },
  },
};

export default autocomplete;

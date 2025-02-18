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

// Material Dashboard 2 React Base Styles
import typography, { baseProperties } from 'assets/theme/base/typography';
import borders from 'assets/theme/base/borders';

// Material Dashboard 2 React Helper Functions
import pxToRem from 'assets/theme/functions/pxToRem';
import { CSSInterpolation } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const { fontWeightBold } = typography as TypographyOptions;
const { borderRadius } = borders;

const root: CSSInterpolation = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: baseProperties.fontSizeXS,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.lg,
  padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
  lineHeight: 1.4,
  textAlign: 'center',
  textTransform: 'uppercase',
  userSelect: 'none',
  backgroundSize: '150% !important',
  backgroundPositionX: '25% !important',
  transition: 'all 150ms ease-in',

  '&:disabled': {
    pointerEvent: 'none',
    opacity: 0.65,
  },

  '& .material-icons': {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

export default root;

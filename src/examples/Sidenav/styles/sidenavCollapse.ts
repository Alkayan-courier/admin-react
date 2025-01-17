import { Theme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import colors from 'assets/theme-dark/base/colors';
import { baseProperties } from 'assets/theme/base/typography';
import { ControllerType } from 'context';
import { ThemeType } from 'types';

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
function collapseItem(
  theme: ThemeType,
  ownerState: Partial<ControllerType> & {
    active: boolean;
    collapseItem: boolean;
    expanded: boolean;
  }
) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const {
    active,
    transparentSidenav,
    whiteSidenav,
    darkMode,
    sidenavColor,
    collapseItem,
    expanded,
  } = ownerState;

  const { white, transparent, dark, grey, gradients } = palette;
  const { md } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem, rgba, linearGradient } = functions;

  return {
    background: active
      ? linearGradient(
          gradients[sidenavColor as keyof typeof gradients].main,
          gradients[sidenavColor as keyof typeof gradients].state
        )
      : transparent.main,
    color:
      (transparentSidenav && !darkMode && !active) || (whiteSidenav && !active)
        ? dark.main
        : white.main,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: `${pxToRem(collapseItem ? 5 : 8)} ${pxToRem(collapseItem ? 20 : 10)}`,
    margin: `${pxToRem(1.5)} ${pxToRem(16)}`,
    borderRadius: borderRadius.md,
    cursor: 'pointer',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    boxShadow: active && !whiteSidenav && !darkMode && !transparentSidenav ? md : 'none',
    [breakpoints.up('xl')]: {
      transition: transitions.create(['box-shadow', 'background-color'], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },

    '&:hover, &:focus': {
      backgroundColor: () => {
        let backgroundValue;

        if (!active) {
          backgroundValue =
            transparentSidenav && !darkMode
              ? grey[300]
              : rgba(whiteSidenav ? grey[400] : white.main, 0.2);
        }

        return backgroundValue;
      },
    },
  };
}

function collapseIconBox(
  theme: ThemeType,
  ownerState: Partial<ControllerType> & { active: boolean }
) {
  const { palette, transitions, borders, functions } = theme;
  const { transparentSidenav, whiteSidenav, darkMode, active } = ownerState;

  const { white, dark } = palette;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    minWidth: pxToRem(32),
    minHeight: pxToRem(32),
    color:
      (transparentSidenav && !darkMode && !active) || (whiteSidenav && !active)
        ? dark.main
        : white.main,
    borderRadius: borderRadius.md,
    display: 'grid',
    placeItems: 'center',
    transition: transitions.create('margin', {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    '& svg, svg g': {
      color: transparentSidenav || whiteSidenav ? dark.main : white.main,
    },
  };
}

const collapseIcon = (
  { palette: { white, gradients } }: Theme,
  { active }: { active: boolean }
) => ({
  color: active ? white.main : gradients.dark.state,
});

function collapseText(theme: ThemeType, ownerState: Partial<ControllerType> & { active: boolean }) {
  const { typography, transitions, breakpoints, functions } = theme;
  const { miniSidenav, transparentSidenav, active } = ownerState;

  const { fontWeightRegular, fontWeightLight } = typography as TypographyOptions;
  const { pxToRem } = functions;

  return {
    marginLeft: pxToRem(10),

    [breakpoints.up('xl')]: {
      opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
      maxWidth: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : '100%',
      marginLeft: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : pxToRem(10),
      transition: transitions.create(['opacity', 'margin'], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    '& span': {
      fontWeight: active ? fontWeightRegular : fontWeightLight,
      fontSize: baseProperties.fontSizeSM,
      lineHeight: 0,
    },
  };
}

export { collapseItem, collapseIconBox, collapseIcon, collapseText };

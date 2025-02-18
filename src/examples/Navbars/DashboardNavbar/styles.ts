import { Theme } from '@mui/material';
import { baseProperties } from 'assets/theme/base/typography';
import { ControllerType } from 'context';

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
function navbar(
  theme: Theme,
  ownerState: Partial<ControllerType> & { absolute?: boolean; light?: boolean }
) {
  const { palette, boxShadows, functions, transitions, breakpoints, borders } = theme;
  const { transparentNavbar, absolute, light, darkMode } = ownerState;

  const { dark, white, text, transparent, background } = palette;
  const { navbarBoxShadow } = boxShadows;
  const { rgba, pxToRem } = functions;
  const { borderRadius } = borders;

  return {
    boxShadow: transparentNavbar || absolute ? 'none' : navbarBoxShadow,
    backdropFilter: transparentNavbar || absolute ? 'none' : `saturate(200%) blur(${pxToRem(30)})`,
    backgroundColor:
      transparentNavbar || absolute
        ? `${transparent.main} !important`
        : rgba(darkMode ? background.default : white.main, 0.8),

    color: () => {
      let color;

      if (light) {
        color = white.main;
      } else if (transparentNavbar) {
        color = text.primary;
      } else {
        color = dark.main;
      }

      return color;
    },
    top: absolute ? 0 : pxToRem(12),
    minHeight: pxToRem(75),
    display: 'grid',
    alignItems: 'center',
    borderRadius: borderRadius.xl,
    paddingTop: pxToRem(8),
    paddingBottom: pxToRem(8),
    paddingRight: absolute ? pxToRem(8) : 0,
    paddingLeft: absolute ? pxToRem(16) : 0,

    '& > *': {
      transition: transitions.create('all', {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    '& .MuiToolbar-root': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      [breakpoints.up('sm')]: {
        minHeight: 'auto',
        padding: `${pxToRem(4)} ${pxToRem(16)}`,
      },
    },
  };
}

const navbarContainer = ({ breakpoints }: Theme) => ({
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  pt: 0.5,
  pb: 0.5,

  [breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '0',
    paddingBottom: '0',
  },
});

const navbarRow = ({ breakpoints }: Theme, { isMini }: { isMini?: boolean }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',

  [breakpoints.up('md')]: {
    justifyContent: isMini ? 'space-between' : 'stretch',
    width: isMini ? '100%' : 'max-content',
  },

  [breakpoints.up('xl')]: {
    justifyContent: 'stretch !important',
    width: 'max-content !important',
  },
});

const navbarIconButton = ({ breakpoints }: Theme) => ({
  px: 1,

  '& .material-icons, .material-icons-round': {
    fontSize: `${baseProperties.fontSizeXL} !important`,
  },

  '& .MuiTypography-root': {
    display: 'none',

    [breakpoints.up('sm')]: {
      display: 'inline-block',
      lineHeight: 1.2,
      ml: 0.5,
    },
  },
});

const navbarMobileMenu = ({ breakpoints }: Theme) => ({
  display: 'inline-block',
  lineHeight: 0,

  [breakpoints.up('xl')]: {
    display: 'none',
  },
});

export { navbar, navbarContainer, navbarRow, navbarIconButton, navbarMobileMenu };

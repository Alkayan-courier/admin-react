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

import { useState, useEffect } from 'react';

// react-github-btn
import GitHubButton from 'react-github-btn';

// @mui material components
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

// @mui icons
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';

// Custom styles for the Configurator
import ConfiguratorRoot from 'examples/Configurator/ConfiguratorRoot';

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setOpenConfigurator,
  setTransparentSidenav,
  setWhiteSidenav,
  setFixedNavbar,
  setSidenavColor,
  setDarkMode,
  ControllerType,
  DispatchFunction,
} from 'context';
import { Theme } from '@mui/material';
import { baseProperties } from 'assets/theme/base/typography';

function Configurator() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    openConfigurator,
    fixedNavbar,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller as ControllerType;
  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ['primary', 'dark', 'info', 'success', 'warning', 'error'];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener('resize', handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch as DispatchFunction, false);
  const handleTransparentSidenav = () => {
    setTransparentSidenav(dispatch as DispatchFunction, true);
    setWhiteSidenav(dispatch as DispatchFunction, false);
  };
  const handleWhiteSidenav = () => {
    setWhiteSidenav(dispatch as DispatchFunction, true);
    setTransparentSidenav(dispatch as DispatchFunction, false);
  };
  const handleDarkSidenav = () => {
    setWhiteSidenav(dispatch as DispatchFunction, false);
    setTransparentSidenav(dispatch as DispatchFunction, false);
  };
  const handleFixedNavbar = () => setFixedNavbar(dispatch as DispatchFunction, !fixedNavbar);
  const handleDarkMode = () => setDarkMode(dispatch as DispatchFunction, !darkMode);

  // sidenav type buttons styles
  const sidenavTypeButtonsStyles = ({
    functions: { pxToRem },
    palette: { white, dark, background },
    borders: { borderWidth },
  }: Theme) => ({
    height: pxToRem(39),
    background: darkMode ? background.paper : white.main,
    color: darkMode ? white.main : dark.main,
    border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,

    '&:hover, &:focus, &:focus:not(:hover)': {
      background: darkMode ? background.paper : white.main,
      color: darkMode ? white.main : dark.main,
      border: `${borderWidth[1]} solid ${darkMode ? white.main : dark.main}`,
    },
  });

  // sidenav type active button styles
  const sidenavTypeActiveButtonStyles = ({
    functions: { pxToRem, linearGradient },
    palette: { white, gradients, background },
  }: Theme) => ({
    height: pxToRem(39),
    background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
    color: darkMode ? background.paper : white.main,

    '&:hover, &:focus, &:focus:not(:hover)': {
      background: darkMode ? white.main : linearGradient(gradients.dark.main, gradients.dark.state),
      color: darkMode ? background.paper : white.main,
    },
  });

  return (
    <ConfiguratorRoot variant='permanent' ownerState={{ openConfigurator }}>
      <MDBox
        display='flex'
        justifyContent='space-between'
        alignItems='baseline'
        pt={4}
        pb={0.5}
        px={3}
      >
        <MDBox>
          <MDTypography variant='h5'>Material UI Configurator</MDTypography>
          <MDTypography variant='body2' color='text'>
            See our dashboard options.
          </MDTypography>
        </MDBox>

        <Icon
          sx={({ palette: { dark, white } }) => ({
            fontSize: `${baseProperties.fontSizeLG} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: 'currentColor',
            strokeWidth: '2px',
            cursor: 'pointer',
            transform: 'translateY(5px)',
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </MDBox>

      <Divider />

      <MDBox pt={0.5} pb={3} px={3}>
        <MDBox>
          <MDTypography variant='h6'>Sidenav Colors</MDTypography>

          <MDBox mb={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={({
                  borders: { borderWidth },
                  palette: { white, dark, background },
                  transitions,
                }) => ({
                  width: '24px',
                  height: '24px',
                  padding: 0,
                  border: `${borderWidth[1]} solid ${darkMode ? background.paper : white.main}`,
                  borderColor: () => {
                    let borderColorValue: string = sidenavColor === color ? dark.main : '';

                    if (darkMode && sidenavColor === color) {
                      borderColorValue = white.main;
                    }

                    return borderColorValue;
                  },
                  transition: transitions.create('border-color', {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                    linearGradient(
                      gradients[color as keyof typeof gradients].main,
                      gradients[color as keyof typeof gradients].state
                    ),

                  '&:not(:last-child)': {
                    mr: 1,
                  },

                  '&:hover, &:focus, &:active': {
                    borderColor: darkMode ? white.main : dark.main,
                  },
                })}
                onClick={() => setSidenavColor(dispatch as DispatchFunction, color)}
              />
            ))}
          </MDBox>
        </MDBox>

        <MDBox mt={3} lineHeight={1}>
          <MDTypography variant='h6'>Sidenav Type</MDTypography>
          <MDTypography variant='button' color='text'>
            Choose between different sidenav types.
          </MDTypography>

          <MDBox
            sx={{
              display: 'flex',
              mt: 2,
              mr: 1,
            }}
          >
            <MDButton
              color='dark'
              variant='contained'
              onClick={handleDarkSidenav}
              disabled={disabled}
              fullWidth
              sx={
                !transparentSidenav && !whiteSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              Dark
            </MDButton>
            <MDBox sx={{ mx: 1, width: '8rem', minWidth: '8rem' }}>
              <MDButton
                color='dark'
                variant='contained'
                onClick={handleTransparentSidenav}
                disabled={disabled}
                fullWidth
                sx={
                  transparentSidenav && !whiteSidenav
                    ? sidenavTypeActiveButtonStyles
                    : sidenavTypeButtonsStyles
                }
              >
                Transparent
              </MDButton>
            </MDBox>
            <MDButton
              color='dark'
              variant='contained'
              onClick={handleWhiteSidenav}
              disabled={disabled}
              fullWidth
              sx={
                whiteSidenav && !transparentSidenav
                  ? sidenavTypeActiveButtonStyles
                  : sidenavTypeButtonsStyles
              }
            >
              White
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          mt={3}
          lineHeight={1}
        >
          <MDTypography variant='h6'>Navbar Fixed</MDTypography>

          <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
        </MDBox>
        <Divider />
        <MDBox display='flex' justifyContent='space-between' alignItems='center' lineHeight={1}>
          <MDTypography variant='h6'>Light / Dark</MDTypography>

          <Switch checked={darkMode} onChange={handleDarkMode} />
        </MDBox>
        <Divider />
        <MDBox mt={3} mb={2}>
          <MDButton
            component={'a'}
            href='https://www.creative-tim.com/learning-lab/react/quick-start/material-dashboard/'
            target='_blank'
            rel='noreferrer'
            color={darkMode ? 'light' : 'dark'}
            variant='outlined'
            fullWidth
          >
            view documentation
          </MDButton>
        </MDBox>
        <MDBox display='flex' justifyContent='center'>
          <GitHubButton
            href='https://github.com/creativetimofficial/material-dashboard-react'
            data-icon='octicon-star'
            data-size='large'
            data-show-count='true'
            aria-label='Star creativetimofficial/material-dashboard-react on GitHub'
          >
            Star
          </GitHubButton>
        </MDBox>
        <MDBox mt={2} textAlign='center'>
          <MDBox mb={0.5}>
            <MDTypography variant='h6'>Thank you for sharing!</MDTypography>
          </MDBox>

          <MDBox display='flex' justifyContent='center'>
            <MDBox mr={1.5}>
              <MDButton
                component={'a'}
                href='//twitter.com/intent/tweet?text=Check%20Material%20Dashboard%20React%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23react%20%mui&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-dashboard-react'
                target='_blank'
                rel='noreferrer'
                color='dark'
              >
                <TwitterIcon />
                &nbsp; Tweet
              </MDButton>
            </MDBox>
            <MDButton
              component={'a'}
              href='https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard-react'
              target='_blank'
              rel='noreferrer'
              color='dark'
            >
              <FacebookIcon />
              &nbsp; Share
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;

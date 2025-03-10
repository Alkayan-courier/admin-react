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

import { useState, useEffect, MouseEvent } from 'react';

// react-router components
import { Link } from 'react-router-dom';

// @mui material components
import Container from '@mui/material/Container';
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';

// Material Dashboard 2 React example components
import DefaultNavbarLink from 'examples/Navbars/DefaultNavbar/DefaultNavbarLink';
import DefaultNavbarMobile from 'examples/Navbars/DefaultNavbar/DefaultNavbarMobile';

// Material Dashboard 2 React base styles
import breakpoints from 'assets/theme/base/breakpoints';

// Material Dashboard 2 React context
import { ControllerType, useMaterialUIController } from 'context';
import { ActionType } from 'types';

interface DefaultNavbarProps {
  transparent?: boolean;
  light?: boolean;
  action?: ActionType;
}

function DefaultNavbar({ transparent, light, action }: DefaultNavbarProps) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller as ControllerType;

  const [mobileNavbar, setMobileNavbar] = useState<ParentNode | boolean | null>(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
    setMobileNavbar(currentTarget?.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener('resize', displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', displayMobileNavbar);
  }, []);

  return (
    <Container>
      <MDBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={3}
        mx={3}
        width='calc(100% - 48px)'
        borderRadius='lg'
        shadow={transparent ? 'none' : 'md'}
        color={light ? 'white' : 'dark'}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        position='absolute'
        left={0}
        zIndex={3}
        sx={({
          palette: { transparent: transparentColor, white, background },
          functions: { rgba },
        }) => ({
          backgroundColor: transparent
            ? transparentColor.main
            : rgba(darkMode ? background.paper : white.main, 0.8),
          backdropFilter: transparent ? 'none' : `saturate(200%) blur(30px)`,
        })}
      >
        <MDBox
          component={Link}
          to='/'
          py={transparent ? 1.5 : 0.75}
          lineHeight={1}
          pl={{ xs: 0, lg: 1 }}
        >
          <MDTypography variant='button' fontWeight='bold' color={light ? 'white' : 'dark'}>
            Material Dashboard 2
          </MDTypography>
        </MDBox>
        <MDBox color='inherit' display={{ xs: 'none', lg: 'flex' }} m={0} p={0}>
          <DefaultNavbarLink icon='donut_large' name='dashboard' route='/dashboard' light={light} />
          <DefaultNavbarLink icon='person' name='profile' route='/profile' light={light} />
          <DefaultNavbarLink
            icon='key'
            name='sign in'
            route='/authentication/sign-in'
            light={light}
          />
        </MDBox>
        {action &&
          (action.type === 'internal' ? (
            <MDBox display={{ xs: 'none', lg: 'inline-block' }}>
              <MDButton
                component={Link}
                to={action.route}
                variant='gradient'
                color={action.color ? action.color : 'info'}
                size='small'
              >
                {action.label}
              </MDButton>
            </MDBox>
          ) : (
            <MDBox display={{ xs: 'none', lg: 'inline-block' }}>
              <MDButton
                component='a'
                href={action.route}
                target='_blank'
                rel='noreferrer'
                variant='gradient'
                color={action.color ? action.color : 'info'}
                size='small'
                sx={{ mt: -0.3 }}
              >
                {action.label}
              </MDButton>
            </MDBox>
          ))}
        <MDBox
          display={{ xs: 'inline-block', lg: 'none' }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color='inherit'
          sx={{ cursor: 'pointer' }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize='inherit'>{mobileNavbar ? 'close' : 'menu'}</Icon>
        </MDBox>
      </MDBox>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} />}
    </Container>
  );
}

export default DefaultNavbar;

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

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import Menu from '@mui/material/Menu';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DefaultNavbarLink from 'examples/Navbars/DefaultNavbar/DefaultNavbarLink';

interface DefaultNavbarMobileProps {
  open: Element | boolean | null | ParentNode;
  close: () => void;
}

function DefaultNavbarMobile({ open, close }: DefaultNavbarMobileProps) {
  let width = 0;
  if (open instanceof Element) {
    const { width: _width } = open?.getBoundingClientRect();
    width = _width;
  }

  return (
    <Menu
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      anchorEl={open && typeof open !== 'boolean' ? (open as Element) : undefined}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <MDBox px={0.5}>
        <DefaultNavbarLink icon='donut_large' name='dashboard' route='/dashboard' light={false} />
        <DefaultNavbarLink icon='person' name='profile' route='/profile' light={false} />
        <DefaultNavbarLink
          icon='account_circle'
          name='sign up'
          route='/authentication/sign-up'
          light={false}
        />
        <DefaultNavbarLink
          icon='key'
          name='sign in'
          route='/authentication/sign-in'
          light={false}
        />
      </MDBox>
    </Menu>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;

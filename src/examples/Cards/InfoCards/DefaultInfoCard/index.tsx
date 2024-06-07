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

// prop-types is library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

import { ReactNode } from 'react';

interface DefaultInfoCardProps {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
  icon: ReactNode;
  title: string;
  description?: string;
  value?: string | number;
}

function DefaultInfoCard({ color, icon, title, description, value }: DefaultInfoCardProps) {
  return (
    <Card>
      <MDBox p={2} mx={3} display='flex' justifyContent='center'>
        <MDBox
          display='grid'
          justifyContent='center'
          alignItems='center'
          bgColor={color}
          color='white'
          width='4rem'
          height='4rem'
          shadow='md'
          borderRadius='lg'
          variant='gradient'
        >
          <Icon fontSize='inherit'>{icon}</Icon>
        </MDBox>
      </MDBox>
      <MDBox pb={2} px={2} textAlign='center' lineHeight={1.25}>
        <MDTypography variant='h6' fontWeight='medium' textTransform='capitalize'>
          {title}
        </MDTypography>
        {description && (
          <MDTypography variant='caption' color='text' fontWeight='regular'>
            {description}
          </MDTypography>
        )}
        {description && !value ? null : <Divider />}
        {value && (
          <MDTypography variant='h5' fontWeight='medium'>
            {value}
          </MDTypography>
        )}
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: 'info',
  value: '',
  description: '',
};

export default DefaultInfoCard;
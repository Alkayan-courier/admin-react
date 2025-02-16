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

// prop-types is a library for typechecking of props

// @mui material components
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import environment from 'enviroment';

interface OrderStatusStatisticsCardProps {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
  bgColor?: string;
  title: string;
  count: string | number;
  icon: React.ReactNode;
  label?: string;
}

function OrderStatusStatisticsCard({
  color = 'info',
  title,
  count,
  icon,
  bgColor,
  label,
}: OrderStatusStatisticsCardProps) {
  return (
    <Card>
      <MDBox display='flex' justifyContent='space-between' pt={1} px={2}>
        <MDBox
          variant='gradient'
          // color={color === 'light' ? 'dark' : 'white'}
          // coloredShadow={color}
          borderRadius='xl'
          display='flex'
          justifyContent='center'
          alignItems='center'
          width='4rem'
          height='4rem'
          mt={-4}
          sx={{ background: 'transparent' }}
        >
          <img className='size-fit ' src={environment.imagesUrl! + icon} />
        </MDBox>
        <MDBox textAlign='right' lineHeight={1.25}>
          <MDTypography variant='button' fontWeight='light' color='text'>
            {title}
          </MDTypography>
          <MDTypography variant='h4'>{count}</MDTypography>
        </MDBox>
      </MDBox>
      <Divider />
      <MDBox pb={2} px={2}>
        <MDTypography component='p' variant='button' color='text' display='flex'>
          {label}
        </MDTypography>
      </MDBox>
    </Card>
  );
}

export default OrderStatusStatisticsCard;

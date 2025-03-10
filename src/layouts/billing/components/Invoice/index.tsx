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

// @mui material components
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

interface InvoiceProps {
  date: string;
  id: string;
  price: string;
  noGutter?: boolean;
}

function Invoice({ date, id, price, noGutter }: InvoiceProps) {
  return (
    <MDBox
      component='li'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      py={1}
      pr={1}
      mb={noGutter ? 0 : 1}
    >
      <MDBox lineHeight={1.125}>
        <MDTypography display='block' variant='button' fontWeight='medium'>
          {date}
        </MDTypography>
        <MDTypography variant='caption' fontWeight='regular' color='text'>
          {id}
        </MDTypography>
      </MDBox>
      <MDBox display='flex' alignItems='center'>
        <MDTypography variant='button' fontWeight='regular' color='text'>
          {price}
        </MDTypography>
        <MDBox display='flex' alignItems='center' lineHeight={1} ml={3} sx={{ cursor: 'pointer' }}>
          <Icon fontSize='small'>picture_as_pdf</Icon>
          <MDTypography variant='button' fontWeight='bold'>
            &nbsp;PDF
          </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

export default Invoice;

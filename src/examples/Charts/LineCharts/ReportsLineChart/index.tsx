/**
=========================================================
* Material Dashboard 2  React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { ReactNode, useMemo } from 'react';

// react-chartjs-2 components
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartDataset,
} from 'chart.js';

// @mui material components
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';

// ReportsLineChart configurations
import configs from 'examples/Charts/LineCharts/ReportsLineChart/configs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ReportsLineChartProps {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
  title: string;
  description?: string | ReactNode;
  date: string;
  chart: {
    labels: string[];
    datasets: ChartDataset<'line'>;
  };
}

function ReportsLineChart({ color, title, description, date, chart }: ReportsLineChartProps) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  return (
    <Card sx={{ height: '100%' }}>
      <MDBox padding='1rem'>
        {useMemo(
          () => (
            <MDBox
              variant='gradient'
              bgColor={color}
              borderRadius='lg'
              coloredShadow={color}
              py={2}
              pr={0.5}
              mt={-5}
              height='12.5rem'
            >
              <Line data={data} options={options} redraw />
            </MDBox>
          ),
          [chart, color]
        )}
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant='h6' textTransform='capitalize'>
            {title}
          </MDTypography>
          <MDTypography component='div' variant='button' color='text' fontWeight='light'>
            {description}
          </MDTypography>
          <Divider />
          <MDBox display='flex' alignItems='center'>
            <MDTypography variant='button' color='text' lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
              <Icon>schedule</Icon>
            </MDTypography>
            <MDTypography variant='button' color='text' fontWeight='light'>
              {date}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsLineChart
ReportsLineChart.defaultProps = {
  color: 'info',
  description: '',
};

export default ReportsLineChart;
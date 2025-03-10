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
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart';
import ReportsLineChart from 'examples/Charts/LineCharts/ReportsLineChart';
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard';

// Data
import reportsBarChartData from 'layouts/dashboard/data/reportsBarChartData';
import reportsLineChartData from 'layouts/dashboard/data/reportsLineChartData';

// Dashboard components
import Projects from 'layouts/dashboard/components/Projects';
import OrdersOverview from 'layouts/dashboard/components/OrdersOverview';
import { Children, useEffect } from 'react';
import { getDashboardData } from 'store/dashboard';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import OrderStatusStatisticsCard from 'examples/Cards/StatisticsCards/OrderStatusStatisticsCard';

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const { data } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getDashboardData());
    }
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          {Children.toArray(
            data.map((card) => (
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <OrderStatusStatisticsCard
                    color='dark'
                    bgColor={card.backgroundColor}
                    icon={card.iconPath}
                    title={card.price + ' AED'}
                    count={card.ordersCount}
                    label={card.statusNameEn}
                  />
                </MDBox>
              </Grid>
            ))
          )}
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color='info'
                  title='website views'
                  description='Last Campaign Performance'
                  date='campaign sent 2 days ago'
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color='success'
                  title='daily sales'
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date='updated 4 min ago'
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color='dark'
                  title='completed tasks'
                  description='Last Campaign Performance'
                  date='just updated'
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;

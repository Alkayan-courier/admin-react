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

import { FormEvent, useState } from 'react';

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';

// Authentication layout components
import BasicLayout from 'layouts/authentication/components/BasicLayout';

// Images
import bgImage from 'assets/images/bg-sign-in-basic.jpeg';
import { login } from 'store/auth';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from 'store';
import { LoginDataType } from 'types';
import { useSelector } from 'react-redux';
import Spinner from 'components/Spinner';

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [loginData, setLoginData] = useState<LoginDataType>({
    username: '',
    password: '',
  });
  const { isLoggingIn } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleLogin = async () => {
    dispatch(login(loginData));
  };
  function submitHandler(event: FormEvent<HTMLFormElement | HTMLDivElement>): void {
    event.preventDefault();
    handleLogin();
  }

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant='gradient'
          bgColor='info'
          borderRadius='lg'
          coloredShadow='info'
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign='center'
        >
          <MDTypography variant='h4' fontWeight='medium' color='white' mt={1}>
            Sign in
          </MDTypography>
          {/* <Grid container spacing={3} justifyContent='center' sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href='#' variant='body1' color='white'>
                <FacebookIcon color='inherit' />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href='#' variant='body1' color='white'>
                <GitHubIcon color='inherit' />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href='#' variant='body1' color='white'>
                <GoogleIcon color='inherit' />
              </MDTypography>
            </Grid>
          </Grid> */}
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component='form' role='form' onSubmit={submitHandler}>
            <MDBox mb={2}>
              <MDInput
                type='username'
                label='username'
                autoComplete='username'
                fullWidth
                onChange={(e) => setLoginData((item) => ({ ...item, username: e.target.value }))}
                required
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type='password'
                label='Password'
                autoComplete='current-password'
                fullWidth
                onChange={(e) => setLoginData((item) => ({ ...item, password: e.target.value }))}
                required
              />
            </MDBox>
            {/* <MDBox display='flex' alignItems='center' ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant='button'
                fontWeight='regular'
                color='text'
                onClick={handleSetRememberMe}
                sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton
                variant='gradient'
                color='info'
                fullWidth
                type='submit'
                isLoading={isLoggingIn}
                disabled={isLoggingIn}
              >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign='center'>
              <MDTypography variant='button' color='text'>
                <MDTypography
                  component={Link}
                  to='/authentication/'
                  variant='button'
                  color='info'
                  fontWeight='medium'
                  textGradient
                >
                  Forgot password?
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;

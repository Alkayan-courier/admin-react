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

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import MDButton from 'components/MDButton';
import MDAvatar from 'components/MDAvatar';

interface Action {
  type?: 'external' | 'internal';
  route: string;
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
  // | 'light'
  // | 'dark'
  // | 'white';
  label: string;
}

// Define the props interface for DefaultProjectCard
interface DefaultProjectCardProps {
  image: string;
  label: string;
  title: string;
  description: string;
  action: Action;
  authors?: Array<Record<string, string>>; // Equivalent to PropTypes.arrayOf(PropTypes.object)
}
function DefaultProjectCard({
  image,
  label,
  title,
  description,
  action,
  authors,
}: DefaultProjectCardProps) {
  const renderAuthors = authors?.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement='bottom'>
      <MDAvatar
        src={media}
        alt={name}
        size='xs'
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: 'pointer',
          position: 'relative',
          ml: -1.25,

          '&:hover, &:focus': {
            zIndex: '10',
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        overflow: 'visible',
      }}
    >
      <MDBox position='relative' width='100.25%' shadow='xl' borderRadius='xl'>
        <CardMedia
          src={image}
          component='img'
          title={title}
          sx={{
            maxWidth: '100%',
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </MDBox>
      <MDBox mt={1} mx={0.5}>
        <MDTypography variant='button' fontWeight='regular' color='text' textTransform='capitalize'>
          {label}
        </MDTypography>
        <MDBox mb={1}>
          {action.type === 'internal' ? (
            <MDTypography
              component={Link}
              to={action.route}
              variant='h5'
              textTransform='capitalize'
            >
              {title}
            </MDTypography>
          ) : (
            <MDTypography
              component='a'
              href={action.route}
              target='_blank'
              rel='noreferrer'
              variant='h5'
              textTransform='capitalize'
            >
              {title}
            </MDTypography>
          )}
        </MDBox>
        <MDBox mb={3} lineHeight={0}>
          <MDTypography variant='button' fontWeight='light' color='text'>
            {description}
          </MDTypography>
        </MDBox>
        <MDBox display='flex' justifyContent='space-between' alignItems='center'>
          {action.type === 'internal' ? (
            <MDButton
              component={Link}
              to={action.route}
              variant='outlined'
              size='small'
              color={action.color}
            >
              {action.label}
            </MDButton>
          ) : (
            <MDButton
              component='a'
              href={action.route}
              target='_blank'
              rel='noreferrer'
              variant='outlined'
              size='small'
              color={action.color}
            >
              {action.label}
            </MDButton>
          )}
          <MDBox display='flex'>{renderAuthors}</MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default DefaultProjectCard;

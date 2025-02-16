const Claims = {
  ID: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier',
  MOBILE: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone',
  ROLE: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
  USERNAME: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
} as const;

const environment = {
  apiURL: process.env.REACT_APP_API_URL,
  token: process.env.REACT_APP_TOKEN,
  imagesUrl: process.env.REACT_APP_IMAGES_URL,
  roleClaim: Claims.ROLE,
  mobileClaim: Claims.MOBILE,
  userName: Claims.USERNAME,
  idClaim: Claims.ID,
} as const;

export default environment;

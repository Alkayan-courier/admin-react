/// <reference types="vite/client" />

const Claims = {
  ID: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier',
  MOBILE: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone',
  ROLE: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
  USERNAME: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
} as const;

const environment = {
  apiURL: import.meta.env.VITE_API_API_URL,
  token: import.meta.env.VITE_API_TOKEN,
  imagesUrl: import.meta.env.VITE_API_IMAGES_URL,
  roleClaim: Claims.ROLE,
  mobileClaim: Claims.MOBILE,
  userName: Claims.USERNAME,
  idClaim: Claims.ID,
} as const;

export default environment;

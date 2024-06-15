/**
=========================================================
* Material Dashboard 2 React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react';

// prop-types is a library for typechecking of props
// Custom styles for MDButton
import MDButtonRoot from 'components/MDButton/MDButtonRoot';

// Material Dashboard 2 React contexts
import { ControllerType, useMaterialUIController } from 'context';
import { ButtonProps } from '@mui/material';
import { MDButtonProps, OwnerColorType, VariantType } from 'types';
import { Link, NavLinkProps } from 'react-router-dom';
// type VariantType = 'text' | 'contained' | 'outlined' | 'gradient';

interface CustomButtonProps extends ButtonProps {
  component?: 'a' | typeof Link;
  iconOnly?: boolean;
  circular?: boolean;
  ownerColor?: OwnerColorType;
  ownerVariant?: VariantType;
}

type ButtonLinkProps = ButtonProps &
  NavLinkProps & {
    component: typeof Link;
  };

type ButtonAnchorProps = ButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    component: 'a';
  };

export type ButtonPropTypes = CustomButtonProps | ButtonLinkProps | ButtonAnchorProps;
const MDButton = forwardRef<HTMLButtonElement, ButtonPropTypes>(
  (
    {
      ownerColor = 'inherit',
      ownerVariant = 'contained',
      size = 'medium',
      variant,
      circular = false,
      iconOnly = false,
      children,
      color,
      ...rest
    }: ButtonHTMLAttributes<HTMLButtonElement> &
      ButtonProps &
      Omit<MDButtonProps, 'size' | 'color'>,
    ref
  ) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller as ControllerType;
    if (color) {
      ownerColor ??= color;
    }
    if (variant) {
      ownerVariant ??= variant;
    }
    return (
      <MDButtonRoot
        {...rest}
        ref={ref}
        color='primary'
        variant={(variant as VariantType) === 'gradient' ? 'contained' : variant}
        size={size}
        ownerState={{
          ownerColor,
          ownerVariant,
          size,
          circular,
          iconOnly,
          darkMode,
        }}
      >
        {children}
      </MDButtonRoot>
    );
  }
);

// Setting default values for the props of MDButton
export default MDButton;

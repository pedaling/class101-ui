import { defaultTo } from 'lodash-es';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, PureComponent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import {
  gray000,
  gray200,
  gray700,
  gray800,
  orange000,
  orange100,
  orange200,
  orange600,
  red000,
  red100,
  red200,
  red600,
} from '../../Colors';
import { Omit } from '../../interfaces/props';
import Theme, { ThemeConfig, ThemeMode } from '../../Theme';
import ButtonSpinner from './ButtonSpinner';
import { ButtonSize, ButtonVariant, ExcludeDefaultVariant } from './interface';
import { getPointColors } from './utils';

interface CommonProps {
  // deprecated(variant 중에서만 사용해주세요)
  color?: string;
  // deprecated
  backgroundColor?: string;

  theme: ThemeConfig;
  size: ButtonSize;
  variant: ButtonVariant;

  type?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  borderRadius?: number;
  to?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>) => void;
  children?: ReactNode;
  disabled?: boolean;
  target?: string;
  className?: string;
  style?: React.CSSProperties;
}

type OmittedAnchorAttributes = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;
type OmittedButtonAttributes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

interface Props extends CommonProps {
  fill?: boolean;
  anchorAttributes?: OmittedAnchorAttributes;
  buttonAttributes?: OmittedButtonAttributes;
}

export type ButtonProps = Props;

export default class Button extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    theme: Theme.light,
    size: ButtonSize.MEDIUM,
    variant: ButtonVariant.DEFAULT,
    type: 'button',
    fill: false,
  };

  public render() {
    const {
      type,
      fill,
      size,
      variant,
      theme,
      leftIcon,
      rightIcon,
      children,
      disabled,
      loading,
      to,
      href,
      target,
      anchorAttributes,
      buttonAttributes,
      ...restProps
    } = this.props;
    if (loading) {
      return (
        <ButtonContainer
          type={type}
          size={size}
          variant={variant}
          theme={theme}
          fill={`${fill}`}
          disabled
          {...buttonAttributes}
          {...restProps}
        >
          <ButtonSpinner buttonSize={size} variant={variant} theme={theme} />
        </ButtonContainer>
      );
    }

    const options: { rel?: string } = {};

    if (target === '_blank') {
      options.rel = 'noopener noreferrer';
    }

    const innerElements = (
      <>
        {Boolean(leftIcon) && (
          <LeftIcon data-icon buttonSize={size}>
            {leftIcon}
          </LeftIcon>
        )}
        <Text>{children}</Text>
        {Boolean(rightIcon) && (
          <RightIcon data-icon buttonSize={size}>
            {rightIcon}
          </RightIcon>
        )}
      </>
    );

    const anchorButtonElements = <AnchorButtonInner>{innerElements}</AnchorButtonInner>;

    if (to) {
      return (
        <LinkButton
          to={to}
          target={target}
          size={size}
          variant={variant}
          theme={theme}
          data-ui-disabled={disabled}
          disabled={disabled}
          fill={`${fill}`}
          {...anchorAttributes}
          {...restProps}
          {...options}
        >
          {anchorButtonElements}
        </LinkButton>
      );
    }
    if (href) {
      return (
        <AnchorButton
          href={href}
          target={target}
          size={size}
          variant={variant}
          theme={theme}
          data-ui-disabled={disabled}
          disabled={disabled}
          fill={`${fill}`}
          {...anchorAttributes}
          {...restProps}
          {...options}
        >
          {anchorButtonElements}
        </AnchorButton>
      );
    }

    return (
      <ButtonContainer
        type={type}
        size={size}
        variant={variant}
        theme={theme}
        data-ui-disabled={disabled}
        disabled={disabled}
        fill={`${fill}`}
        {...buttonAttributes}
        {...restProps}
      >
        {innerElements}
      </ButtonContainer>
    );
  }
}

const iconCommonStyle = css`
  flex: none;
  font-size: 0;
  > svg {
    width: 100%;
    height: 100%;
  }
`;

const iconStyleByButtonSize: { [key in ButtonSize]: FlattenSimpleInterpolation } = {
  [ButtonSize.LARGE]: css`
    width: 24px;
    height: 24px;
  `,
  [ButtonSize.MEDIUM]: css`
    width: 18px;
    height: 18px;
  `,
  [ButtonSize.SMALL]: css`
    width: 18px;
    height: 18px;
  `,
  [ButtonSize.XSMALL]: css`
    width: 16px;
    height: 16px;
  `,
};

const iconMarginByButtonSize: { [key in ButtonSize]: number } = {
  [ButtonSize.LARGE]: 4,
  [ButtonSize.MEDIUM]: 4,
  [ButtonSize.SMALL]: 4,
  [ButtonSize.XSMALL]: 2,
};

const LeftIcon = styled.div<{ buttonSize: ButtonSize }>`
  ${iconCommonStyle};
  ${props => iconStyleByButtonSize[props.buttonSize]}
  margin-right: ${props => iconMarginByButtonSize[props.buttonSize]}px;
`;

const RightIcon = styled.div<{ buttonSize: ButtonSize }>`
  ${iconCommonStyle};
  ${props => iconStyleByButtonSize[props.buttonSize]}
  margin-left: ${props => iconMarginByButtonSize[props.buttonSize]}px;
`;

interface StyledContainerProps extends CommonProps {
  fill?: string;
}

const buttonStyleBySize: { [key in ButtonSize]: FlattenSimpleInterpolation } = {
  [ButtonSize.LARGE]: css`
    font-weight: bold;
    font-size: 16px;
    padding: 0 20px;
    height: 48px;
  `,
  [ButtonSize.MEDIUM]: css`
    font-size: 14px;
    padding: 0 16px;
    height: 40px;
  `,
  [ButtonSize.SMALL]: css`
    font-size: 14px;
    padding: 0 12px;
    height: 32px;
  `,
  [ButtonSize.XSMALL]: css`
    font-size: 11px;
    padding: 0 10px;
    height: 28px;
  `,
};

const buttonDefaultStyleByTheme: { [key in ThemeMode]: FlattenSimpleInterpolation } = {
  [ThemeMode.LIGHT]: css`
    background-color: ${gray000};
    &[data-ui-disabled] {
      color: ${gray200};
      path {
        fill: ${gray200};
      }
    }
  `,
  [ThemeMode.DARK]: css`
    background-color: ${gray800};
    &[data-ui-disabled] {
      color: ${gray700};
      path {
        fill: ${gray700};
      }
    }
  `,
};

const buttonStyleByExcludeDefaultVariant: { [key in ExcludeDefaultVariant]: FlattenSimpleInterpolation } = {
  [ButtonVariant.ORANGE]: css`
    background-color: ${orange600};
    &[data-ui-disabled] {
      background-color: ${orange200};
    }
  `,
  [ButtonVariant.ORANGE_LIGHT]: css`
    background-color: ${orange000};
    &[data-ui-disabled] {
      color: ${orange100};
      path {
        fill: ${orange100};
      }
    }
  `,
  [ButtonVariant.RED]: css`
    background-color: ${red600};
    &[data-ui-disabled] {
      background-color: ${red200};
    }
  `,
  [ButtonVariant.RED_LIGHT]: css`
    background-color: ${red000};
    &[data-ui-disabled] {
      color: ${red100};
      path {
        fill: ${red100};
      }
    }
  `,
};

const buttonCommonStyle = css<StyledContainerProps>`
  flex: none;
  outline: none;
  border: none;
  line-height: 1 !important;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: normal;

  display: ${props => (props.fill === 'true' ? 'flex' : 'inline-flex')};
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border-radius: ${props => defaultTo(props.borderRadius, 3)}px;
  width: ${props => (props.fill === 'true' ? '100%' : 'auto')};

  ${props =>
    props.variant === ButtonVariant.DEFAULT
      ? buttonDefaultStyleByTheme[props.theme.mode as ThemeMode]
      : buttonStyleByExcludeDefaultVariant[props.variant]};

  color: ${props => getPointColors(props)};

  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};
  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${props => buttonStyleBySize[props.size]}

  * {
    vertical-align: middle;
  }

  &:hover,
  &[hover] {
    opacity: 0.9;
    text-decoration: none;
  }

  &:disabled,
  &[disabled],
  &[data-ui-disabled] {
    pointer-events: none;
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.button<StyledContainerProps>`
  ${buttonCommonStyle};
  path {
    fill: ${props => getPointColors(props)};
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const anchorButtonStyle = css`
  ${buttonCommonStyle};
  text-decoration: none;
  &:hover {
    color: inherit;
  }
`;

const AnchorButtonInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkButton = styled(Link)<StyledContainerProps>`
  ${anchorButtonStyle};
`;

const AnchorButton = styled.a<StyledContainerProps>`
  ${anchorButtonStyle};
`;

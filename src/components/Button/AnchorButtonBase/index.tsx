import classNames from 'classnames';
import React, { AnchorHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { LinkBlock } from '../../../core/LinkBlock';
import { ThemeConfig } from '../../../core/Theme';
import { IconProps } from '../../../Icon';
import { Omit } from '../../../interfaces/props';
import { buttonCommonStyle } from '../ButtonBase';
import { ButtonIconPosition } from '../ButtonIcon';

// TODO: ButtonBase와 리팩토링 하기

interface ButtonBaseProps<ColorValue, SizeValue> {
  color: ColorValue;
  theme: ThemeConfig;
  size: SizeValue;
  leftIcon?: React.ReactElement<IconProps>;
  rightIcon?: React.ReactElement<IconProps>;
  loading?: boolean;
  to: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  external?: boolean;
}

type OmittedAnchorAttributes<ColorValue, SizeValue> = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof ButtonBaseProps<ColorValue, SizeValue>
>;

export interface ButtonCommonProps<ColorValue, SizeValue> extends ButtonBaseProps<ColorValue, SizeValue> {
  anchorAttributes?: OmittedAnchorAttributes<ColorValue, SizeValue>;
}

interface Props<ColorValue, SizeValue> extends ButtonCommonProps<ColorValue, SizeValue> {
  spinner: React.ReactNode;
  iconPosition: ButtonIconPosition;
  icon?: React.ReactNode;
}

export default class AnchorButton<ColorValue extends string, SizeValue extends string> extends React.PureComponent<
  Props<ColorValue, SizeValue>
> {
  public render() {
    const {
      icon,
      iconPosition,
      children,
      disabled,
      loading,
      spinner,
      to,
      external,
      anchorAttributes,
      className,
      ...restProps
    } = this.props;

    const isDisabled = loading || disabled;

    return (
      <AnchorButtonWrapper className={classNames(className, { disabled: isDisabled })}>
        <LinkButton to={to} external={external} icon-position={iconPosition} {...anchorAttributes} {...restProps}>
          {icon}
          <Text>{children}</Text>
          {loading && spinner}
        </LinkButton>
      </AnchorButtonWrapper>
    );
  }
}

const Text = styled.span`
  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnchorButtonWrapper = styled.span`
  ${buttonCommonStyle};
  &.disabled {
    cursor: not-allowed;
  }
`;

const getAnchorButtonStyle = (iconPosition?: ButtonIconPosition) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  flex-direction: ${iconPosition === ButtonIconPosition.RIGHT ? 'row-reverse' : 'row'};
  .disabled & {
    pointer-events: none;
  }
`;

const LinkButton = styled(LinkBlock)<{ 'icon-position'?: ButtonIconPosition }>`
  ${props => getAnchorButtonStyle(props['icon-position'])};
`;

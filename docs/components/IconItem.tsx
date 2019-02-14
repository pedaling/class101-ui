import { Caption1, Icon, TextStyles } from '@class101/ui';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

interface Props {
  iconName: string;
}

const Container = styled.div<Props>`
  flex: 0 0 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px 4px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;

  &:hover {
    &::after {
      ${TextStyles.caption1};
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      box-sizing: border-box;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      content: 'Click to copy Icon Name';
    }
  }
`;

const IconName = styled(Caption1)`
  text-align: center;
  word-break: break-all;
`;

class Component extends PureComponent<Props> {
  public handleClickItem = () => {
    const { iconName } = this.props;

    const element = document.createElement('textarea');
    element.value = iconName;
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    // eslint-disable-next-line
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    // eslint-disable-next-line
    document.body.removeChild(element);
  };

  public render() {
    const { iconName, ...restProps } = this.props;
    const IconItem = Icon[iconName];
    return (
      <Container onClick={this.handleClickItem} iconName={iconName} {...restProps}>
        <IconItem />
        <IconName marginTop={4}>{iconName}</IconName>
      </Container>
    );
  }
}

export default Component;

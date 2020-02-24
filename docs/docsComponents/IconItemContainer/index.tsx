import { Icon } from '@class101/ui';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import IconItem from './IconItem';

const BLACK_LIST = [
  'Apple',
  'Facebook',
  'Instagram',
  'GooglePlaystore',
  'GooglePlus',
  'Kakaotalk',
  'Naver',
  'NaverTalk',
  'NavertalkSymbol',
  'Youtube',
];

const ICON_TO_BE_DEPRECATE = ['Category', 'TalkHelpOutlineR', 'StarFull'];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export class IconItemContainer extends PureComponent<{}> {
  public render() {
    return (
      <Container>
        {Object.keys(Icon)
          .filter(key => !BLACK_LIST.includes(key))
          .map(key => (
            <IconItem iconName={key} deprecated={ICON_TO_BE_DEPRECATE.includes(key)} />
          ))}
      </Container>
    );
  }
}

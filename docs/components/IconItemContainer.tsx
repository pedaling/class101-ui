import { Icon } from '@class101/ui';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import IconItem from './IconItem';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default class IconItemContainer extends PureComponent<{}> {
  public render() {
    return (
      <Container>
        {Object.keys(Icon).map(key => (
          <IconItem iconName={key} />
        ))}
      </Container>
    );
  }
}

import styled, { css } from 'styled-components';

import { gray800, gray100, gray600, orange000, orange600 } from '../../Colors';
import { elevation1 } from '../../ElevationStyles';
import { body2 } from '../../TextStyles';

const NavTabCommonStyle = css`
  display: flex;
  flex: 1 0 100px;
  margin: 0 12px;
  padding: 8px 0;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  > * {
    margin-left: 4px;
  }
`;

const ActiveNavTabStyle = css`
  color: ${orange600};
  font-weight: bold;
  background-color: ${orange000};
  * {
    background-color: ${orange600};
  }
`;

const DefaultNavTabStyle = css`
  color: ${gray600};
  * {
    background-color: ${gray800};
  }
`;

export const NavTabContainer = styled.div`
  margin-bottom: 24px;
  border-radius: 4px;
  ${body2};
  ${elevation1};
`;

export const NavTabGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: white;
  border-radius: 4px;
  & + & {
    border-top: 1px solid ${gray100};
  }
`;

export const NavTabHeading = styled.div`
  ${NavTabCommonStyle};
  font-weight: bold;
`;

export const NavTab = styled.div<{ active?: boolean }>`
  ${NavTabCommonStyle};
  cursor: pointer;
  ${props => (props.active ? ActiveNavTabStyle : DefaultNavTabStyle)};
`;

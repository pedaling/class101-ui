import { BreakPoints, Button, Colors, Modal, ThemeConfig, ThemeMode } from '@class101/ui';
import React from 'react';
import styled from 'styled-components';

export const PlayGroundContainer = styled.div<{ theme: ThemeConfig }>`
  padding: 20px;
  background-color: ${props => (props.theme.mode === ThemeMode.DARK ? Colors.gray900 : Colors.white)};
`;

export const PlayGroundButtonContainer = styled.div<{ theme: ThemeConfig }>`
  padding: 16px;
  background-color: ${props => (props.theme.mode === ThemeMode.DARK ? Colors.gray900 : Colors.white)};
  > * {
    margin: 4px;
  }
`;

export const PlayGroundBanner = styled.div<{ backgroundColor?: string; fill?: boolean }>`
  width: ${props => (props.fill ? '100%' : '100px')};
  height: 208px;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor || Colors.gray600};
`;

export const PlayGroundSectionCarouselContent = styled.div`
  ${BreakPoints.media.sm`
    margin: 0 -24px;
  `}
`;

export const SwiperCard = styled.div`
  width: 100%;
  > img {
    display: block;
    width: 100%;
  }
`;

export const PreloadImage = styled.div`
  width: 100%;
  height: 100px;
  background: ${Colors.red000};
`;

export { ThemeProvider } from 'styled-components';

export class ModalOpener extends React.PureComponent<{}, { isVisible: boolean }> {
  public state = {
    isVisible: false,
  };
  public render() {
    return (
      <>
        <Button onClick={() => this.setState({ isVisible: true })}>Open Modal</Button>
        <Modal
          isOpened={this.state.isVisible}
          title={'Modal\nModal2'}
          onClose={() => this.setState({ isVisible: false })}
        >
          Content
        </Modal>
      </>
    );
  }
}

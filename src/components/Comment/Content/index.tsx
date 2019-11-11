import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { gray500 } from 'core/Colors';
import { body2 } from 'core/TextStyles';
import { ButtonSize, TextButton } from '../../Button';

interface Props {
  useLineClamp: boolean;
  maxLine: number;
}

interface State {
  lineClamped: boolean;
  lineClampable: boolean;
}

export class CommentContent extends PureComponent<Props, State> {
  public readonly state: State = {
    lineClamped: true,
    lineClampable: false,
  };

  private contentRef = React.createRef<HTMLDivElement>();

  public componentDidMount() {
    this.calculateClamped();
  }

  public render() {
    const { children, maxLine } = this.props;
    const { lineClampable, lineClamped } = this.state;
    return (
      <Container>
        <Content useLineClamp={lineClamped} maxLine={maxLine} ref={this.contentRef}>
          {children}
        </Content>
        {lineClampable && (
          <ClampToggleButton size={ButtonSize.SMALL} onClick={this.handleToggleClampButton}>
            {lineClamped ? '전체보기' : '숨기기'}
          </ClampToggleButton>
        )}
      </Container>
    );
  }

  private calculateClamped = () => {
    const { useLineClamp } = this.props;
    const lineClampable = useLineClamp && this.getContentClamped();
    this.setState({
      lineClampable,
      lineClamped: lineClampable,
    });
  };

  private getContentClamped = () => {
    const { children } = this.props;
    const { current } = this.contentRef;

    if (children && current) {
      return current.scrollHeight > current.clientHeight;
    }
    return false;
  };

  private handleToggleClampButton = () => {
    const { lineClamped } = this.state;
    this.setState({
      lineClamped: !lineClamped,
    });
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div<{ useLineClamp: boolean; maxLine: number }>`
  ${body2};
  margin-top: 6px;
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  ${props =>
    props.useLineClamp &&
    css`
      -webkit-line-clamp: ${props.maxLine};
    `}
`;

const ClampToggleButton = styled(TextButton)`
  font-size: 11px;
  line-height: 16px;
  color: ${gray500};
  font-weight: 300;
  align-self: flex-start;
`;

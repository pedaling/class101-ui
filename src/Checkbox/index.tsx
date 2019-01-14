// @flow
import React, { Children } from 'react';
import styled, { css } from 'styled-components';
import { CheckboxOn, CheckboxOff} from '../Icon';
import { orange500, redError, gray600 } from '../Colors';
import { HTMLInputProps } from 'interfaces/props';

interface Props extends HTMLInputProps {
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowMessage?: string;
  warnMessage?: string;
  errorMessage?: string;
}

interface State {
  readonly checked: boolean
}

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const DescriptionStyle = css`
  margin: 0;
  font-size: 11px;
  line-height: 16px;
  font-weight: normal;

  * {
    vertical-align: middle;
  }
`;

const ErrorText = styled.h6`
  ${DescriptionStyle};
  color: ${redError};
`;

const WarnText = styled.h6`
  ${DescriptionStyle};
  color: ${orange500};
`;

const AllowText = styled.h6`
  ${DescriptionStyle};
  color: ${gray600};
`;

const ChildText = styled.span`
  font-size: 16px;
  margin-left: 4px;
`

const Container = styled.label<Props>`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
`;

const DescriptionIcon = styled.img.attrs({ alt: '!' })`
  width: 16px;
  height: 16px;
  margin-right: 2px;
`;

export default class Checkbox extends React.PureComponent<Props, State> {
  public readonly state: State = {
    checked: false,
  }

  public static getDerivedStateFromProps(props: Props, state: State) {
    if (props.onChange !== undefined && state.checked !== props.checked) {
      return {
        checked: props.checked,
      }
    }
    return state;
  }

  public render() {
    const { className, style, inputStyle, inline, allowMessage, warnMessage, errorMessage, checked, type, children, ...restProps } = this.props;
    return (
      <div style={style}>
        <Container inline={inline}>
          {this.state.checked ? <CheckboxOn size={18}/> : <CheckboxOff size={18} />}
          <StyledCheckbox
            onChange={this.handleChange}
            checked={this.state.checked}
            style={inputStyle}
            {...restProps}
          />
          <ChildText>{children}</ChildText>
        </Container>
        {allowMessage && !errorMessage && <AllowText>{allowMessage}</AllowText>}
        {errorMessage && (
          <ErrorText>
            <DescriptionIcon src="https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-danger-red.png" />
            <span>{errorMessage}</span>
          </ErrorText>
        )}
        {warnMessage && (
          <WarnText>
            <DescriptionIcon src="https://s3.ap-northeast-2.amazonaws.com/class101-ui/images/ic-danger-yellow.png" />
            <span>{warnMessage}</span>
          </WarnText>
        )}
      </div>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({checked: e.target.checked});
    if (this.props.onChange !== undefined) {
      this.props.onChange(e);
    }
  }
}

import React, { Children } from 'react';
import styled, { css } from 'styled-components';
import { CheckboxOn, CheckboxOff} from '../Icon';
import { orange400, orange500, redError, gray600, red000 } from '../Colors';
import { HTMLInputProps } from 'interfaces/props';
import { Icon } from 'index';
import { Alert } from '@class101/ui/Icon';

export interface Props extends HTMLInputProps {
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  inline?: boolean;
  allowingMessage?: string;
  warnningMessage?: string;
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

interface TextProps {
  readonly color: string;
}

const MessageText = styled.h6<TextProps>`
  ${DescriptionStyle};
  color: ${props => props.color};
`

const ChildText = styled.span`
  font-size: 16px;
  margin-left: 4px;
`

const Container = styled.label<Props>`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  align-items: center;
`;

const DescriptionIcon = styled(Alert)`
  width: 16px;
  height: 16px;
  margin-right: 2px;
`;

export default class Checkbox extends React.PureComponent<Props, State> {
  public readonly state = {
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
    const { style, inputStyle, inline, allowingMessage, warnningMessage, errorMessage, type, children, ...restProps } = this.props;
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

        {allowingMessage && !errorMessage && <MessageText color={gray600}>{allowingMessage}</MessageText>}
        {errorMessage && (
          <MessageText color={redError}>
            <DescriptionIcon fillColor={redError} />
            <span>{errorMessage}</span>
          </MessageText>
        )}
        {warnningMessage && (
          <MessageText color={orange500}>
            <DescriptionIcon fillColor={orange500} />
            <span>{warnningMessage}</span>
          </MessageText>
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

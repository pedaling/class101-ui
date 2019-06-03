import { InlineError, Intent, IconProps } from '@class101/ui';
import * as React from 'react';

export interface Props {
  intent?: Intent;
  children: string;
  icon?: React.ReactElement<IconProps> | null;
}

export class StyledInlineError extends React.Component<Props> {
  public render() {
    return (
      <div style={{ margin: '4px 0' }}>
        <InlineError {...this.props} />
      </div>
    );
  }
}

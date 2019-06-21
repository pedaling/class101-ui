import React, { PureComponent } from 'react';

import Tag from '../../../components/Tag';

interface Props {
  value: string[];
  onRemove: (index: number) => void;
  disabled: boolean;
}

export default class InnerTags extends PureComponent<Props> {
  public static readonly defaultProps: Partial<Props> = {
    value: [],
    disabled: false,
  };

  private handleRemoveTag = (index: number) => () => {
    this.props.onRemove(index);
  };

  public render() {
    const { value, disabled } = this.props;

    return value.map((v, i) => (
      <Tag
        value={v}
        key={`tag-${i}`}
        onRemove={this.handleRemoveTag(i)}
        disabled={disabled}
        className="inner-tags__tag"
      />
    ));
  }
}

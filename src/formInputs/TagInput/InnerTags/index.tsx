import React, { PureComponent } from 'react';

import { Tag } from '../../../components/Tag';

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

  public render() {
    const { value, disabled } = this.props;

    if (value.length > 5000) {
      return <Tag value={`${value.slice(value.length - 3, value.length).join(', ')} 포함 총 ${value.length}개`} onRemove={this.handleRemoveTag(-1)} disabled={disabled} className="inner-tags__tag" />
    }

    return (
      <>
        {value.map((v, i) => (
          <Tag value={v} key={v} onRemove={this.handleRemoveTag(i)} disabled={disabled} className="inner-tags__tag" />
        ))}
      </>
    );
  }

  private handleRemoveTag = (index: number) => () => {
    this.props.onRemove(index);
  };
}

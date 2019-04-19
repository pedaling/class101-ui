// @flow
import React, { ReactNode } from 'react';
import { Button, Colors, Icon, Toast, Toaster, UIContextProvider } from '@class101/ui';
import { ElevationValue } from '@class101/ui/ElevationStyles';

interface Props {
  /** 바탕색 */
  backgroundColor?: string;

  /** 글씨색 */
  color: string;

  /** Elevation 옵션 */
  elevation?: ElevationValue;

  /** 좌측 아이콘 */
  icon?: ReactNode;

  /** Toast 우측에 들어가는 액션 버튼 */
  button?: ReactNode;

  /** 텍스트 */
  text: string;

  /** 화면에 보이는 시간 */
  timeout?: number;

  /** 수평 위치 */
  hPosition?: 'left' | 'middle' | 'right';

  /** 수직 위치 */
  vPosition?: 'top' | 'center' | 'bottom';

  /** 버튼이 클릭되었을때 실행되는 함수 */
  onButtonClick?: (event: React.MouseEvent<HTMLElement>) => void;

  /** 토스트가 닫혔을때 실행되는 함수 */
  onclose?: () => void;
}

export { UIContextProvider };

export const Component = ({
  backgroundColor = Colors.gray900,
  color = 'white',
  elevation = 2,
  button = Icon.Close,
  text = '5초 뒤에 터집니다.',
  hPosition = 'middle',
  vPosition = 'bottom',
}: Props) => (
  <Toast
    backgroundColor={backgroundColor}
    color={color}
    elevation={elevation}
    button={button}
    text={text}
    hPosition={hPosition}
    vPositio={vPosition}
  />
);

// export const ToastContainer = ({}) => (

// );

export class ToastButton extends React.PureComponent {
  private toaster: Toaster;

  constructor(props) {
    super(props);
  }

  public async componentDidMount() {
    this.toaster = await Toaster.create();
    console.log(this.toaster);
  }

  public render() {
    return <Button onClick={() => this.toaster.show({ message: 'Hello Toast!' })}>show Toast!</Button>;
  }

  public componentWillUnmount() {
    Toaster.destroy(this.toaster);
  }
}

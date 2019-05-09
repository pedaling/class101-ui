import { Position, Toast, Toaster, ToastProps, IconProps } from '@class101/ui';
import React, { ReactNode } from 'react';

export interface Props {
  /** @default Colors.gray900 */
  /** 토스트의 바탕색 */
  backgroundColor?: string;

  /** 토스트의 우측에 들어갈 버튼입니다 */
  button?: ReactNode;

  /** @default white */
  /** 토스트의 글자색 */
  color?: string;

  /** 토스트 좌측에 들어갈 아이콘 */
  icon?: React.DetailedReactHTMLElement<IconProps, HTMLElement>;

  /** 토스트 문구 */
  message: string;

  /** @default Position.TOP */
  /** 토스트가 위치할 곳 */
  position?: ToasterPosition;

  /** @default 5000 */
  /** 토스트가 화면에 보이는 시간 */
  timeout: number;

  /** 버튼 클릭시 실행될 함수 */
  onButtonClicked?: () => void;

  /** 토스트가 없어지면 실행되는 함수 */
  onClose?: () => void;
}

export const Component = (props: Props) => <Toast />;

let AppToaster: Toaster;

export async function showToast(props: ToastProps) {
  if (!AppToaster) {
    AppToaster = await Toaster.create();
  }
  AppToaster.show(props);
}

export { Position };

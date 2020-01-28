import { Position, TooltipColor, Tooltip } from '@class101/ui';

export interface Props {
  position?: Position;
  content: React.ReactNode;
  contentTitle?: string;
  color?: TooltipColor;
  children: string | JSX.Element;
  wrapperTagName?: string;
  wrapperStyle?: React.CSSProperties;
  targetStyle?: React.CSSProperties;
  fill?: boolean;
  isOpen?: boolean;
}

export const Component = (props: Props) => <Tooltip {...props} />;

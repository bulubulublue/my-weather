type ButtonShape = 'default' | 'circle';
type SizeType = 'middle' | 'small';
type ButtonType = 'primary' | 'light';

export interface IIconButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  loading?: boolean;
  shape?: ButtonShape;
  size?: SizeType;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

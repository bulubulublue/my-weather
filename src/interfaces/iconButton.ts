type ButtonShape = 'default' | 'circle';
type SizeType = 'middle' | 'small';
type ButtonType = 'primary' | 'light';

export interface IIconButtonProps {
  type?: ButtonType;
  disabled?: boolean;
  icon?: React.ReactNode;
  loading?: boolean;
  shape?: ButtonShape;
  size?: SizeType;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
}

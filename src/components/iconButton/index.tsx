import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { IIconButtonProps } from '../../interfaces/iconButton';
import classNames from 'classnames';
import './iconButton.scss';

const IconButton = (props: IIconButtonProps) => {
  const { type = 'primary', loading = false, shape = 'default', size = 'medium', disabled = false, icon, children, className } = props;

  // click button callback
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!disabled) {
      const { onClick } = props;
      if (loading) {
        e.preventDefault();
        return;
      }
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    }
  };

  const iconNode = loading ? <LoadingOutlined className="icon" /> : icon;

  const kids = children || children === 0 ? children : null;

  const derivedClassNames = classNames(
    'icon_button',
    { is_light: type === 'light' },
    { is_disabled: disabled },
    { icon_button_md: size === 'medium' },
    { icon_button_sm: size === 'small' },
    { is_circle: shape === 'circle' },
    className
  );

  return (
    <div className="button_wrapper">
      <button onClick={handleClick} disabled={disabled} className={derivedClassNames}>
        {iconNode}
        {kids}
      </button>
    </div>
  );
};

export default IconButton;

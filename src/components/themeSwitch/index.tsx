import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import ThemeIcon from '../../assets/svg/themeIcon';
import styles from './themeSwitch.module.scss';

const ThemeSwitch = () => {
  const items: MenuProps['items'] = [
    {
      label: 'light',
      key: 'light',
    },
    {
      label: 'dark',
      key: 'dark',
    },
  ];

  const onClick: MenuProps['onClick'] = ({ key }) => {
    const body = document.querySelector('body');

    if (body) {
      body.className = key;
      localStorage.setItem('theme', key);
    }
  };

  return (
    <Dropdown menu={{ items, onClick }} overlayClassName={styles.overlay} placement="bottomLeft">
      <a onClick={e => e.preventDefault()}>
        <Space>
          <ThemeIcon />
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default ThemeSwitch;

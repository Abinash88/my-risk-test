import React from 'react';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import { navItems } from '../../../lib/const/navigation';

const generateMenu = (items:any,color?:any) => {
  return items.map((item:any) => {
    if (item.child && item.child.length > 0) {
      const submenu = (
        <Menu className='mx-2'>
          {item.child.map((subItem:any) => (
            <Menu.Item key={subItem.id} className='my-4'>
              <Link to={subItem.path} className={color=="transparent"?`text-white`:'text-black'}>{subItem.text}</Link>
            </Menu.Item>
          ))}
        </Menu>
      );
      return (
        <Dropdown key={item.id} overlay={submenu} className='mx-2'>
          <a className={`${color=='transparent'?'text-white':'text-black'}`}  onClick={e => e.preventDefault()}>
            {item.text}
          </a>
        </Dropdown>
      );
    } else {
      return (
        <Menu.Item key={item.id} className='mx-2'>
          <Link to={item.path} 
            style={{ color: color === 'transparent' ? 'white' : 'black' }}
          >{item.text}</Link>
        </Menu.Item>
      );
    }
  });
};

const LoggedMenu = ({color}:{color?:string}) => {
  return (
    <div>
      <Menu mode="horizontal" className={color?`bg-${color}`:'white'}>
        {generateMenu(navItems,color)}
      </Menu>
    </div>
  );
};

export default LoggedMenu;

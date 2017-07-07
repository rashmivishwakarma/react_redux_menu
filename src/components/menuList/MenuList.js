require('./menu-list.scss');
import React from 'react';
import MenuItemList from '../../containers/MenuItemList';

//PRESENTATION COMPONENT
const MenuList = (props) => (
    <div className='menu'>
        <h3 className="menu__title">
          Page sections
        </h3>
        <MenuItemList />
    </div>
)

export default MenuList;
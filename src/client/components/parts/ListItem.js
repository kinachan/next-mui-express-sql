
import React from 'react';
import ListItem from 'material-ui/ListItem';
import ListItemIcon from 'material-ui/ListItemIcon';
import ListItemText from 'material-ui/ListItemText';
import ListSubheader from 'material-ui/ListSubheader';
import * as Icons from 'parts/Icons';
import Link from 'next/link';

const mainListItemMaps = [{
  icon: 'Home',
  text: 'Index',
  href: './',
},{
  icon: 'Dashboard',
  text: 'Dashboard',
  href: './dashboard',
}, {
  icon: 'People',
  text: 'About',
  href: './about',
},{
  icon: 'BarChart',
  text: 'Reports',
  href: './timesheet',
},{
  icon: 'ShoppingCart',
  text: 'Shopping',
  href: '',
}];

const subListItemMap = [{
  icon: 'Assignment',
  text: 'Current month',
  href: '',
},{
  icon: 'Assignment',
  text: 'Last quarter',
  href: '',
}, {
  icon: 'Assignment',
  text: 'Year-end sale',
  href: '',
}]


const renderListItems = (listItemMaps) => {
  return listItemMaps.map(item => {
    const Icon = Icons[item.icon];

    return (
      <Link key={`listitemLink_${item.text}`} href={item.href}>
        <ListItem key={`listitem_${item.text}`} button>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      </Link>
    );
  });
};

export const mainListItems = (
  <div>
    {renderListItems(mainListItemMaps)}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>SubMenus</ListSubheader>
    {renderListItems(subListItemMap)}
  </div>
);
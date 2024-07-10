import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Utilisateurs',
    path: '/customers/',
    icon: <Icon icon="lucide:users" width="24" height="24" />,
    submenu: true,
    subMenuItems:[
      {title:"Liste", path:"/customers/"}
    ]
  },
  {
    title:"Documents",
    path:"/supporting",
    icon: <Icon icon="lucide:file-check" width="24" height="24" />,
    submenu: true,
    subMenuItems:[
      {title:"Dépôt",path:"/supporting"},
      {title:"Consulter", path:"/supporting/visualization"}
    ]
  },

  {
    title:"Annonces",
    path:"/ad/",
    icon: <Icon icon="lucide:credit-card" width="24" height="24" />,
    submenu: true,
    subMenuItems:[
      {title:"Liste", path:"/ad/"},
      /*{title:"Nouveau",path:"/ad/list"},
      {title:"Visite", path:"/ad/visit"},
      {title:"Alertes", path:"/ad/alerts"},*/
    ]
  },
  {
    title:"Profile",
    path:"/profile/",
    icon: <Icon icon="lucide:circle-user" width="24" height="24" />,
    submenu: true,
    subMenuItems:[
      {title:"Me",path:"/profile/"},
    ]
  },
];

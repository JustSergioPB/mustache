import { NavbarItem } from '@mustache/basic-ui';

export const NAVBAR_CONFIG: NavbarItem[] = [
  {
    title: 'Home',
    route: 'home',
  },
  {
    title: 'Packages',
    route: 'packages',
    leafs: [
      {
        title: 'Basic',
        route: 'basic-ui',
        icon: 'npm',
      },
      {
        title: 'Forms',
        route: 'forms-ui',
        icon: 'npm',
      },
      {
        title: 'Auth',
        route: 'auth-ui',
        icon: 'npm',
      },
      {
        title: 'Chat',
        route: 'chat-ui',
        icon: 'npm',
      },
      {
        title: 'Notification',
        route: 'notification-ui',
        icon: 'npm',
      },
      {
        title: 'Language',
        route: 'language-ui',
        icon: 'npm',
      },
    ],
  },
];

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
        icon: 'assets/icons/components.svg',
      },
      {
        title: 'Forms',
        route: 'forms-ui',
        icon: 'assets/icons/components.svg',
      },
      {
        title: 'Auth',
        route: 'auth-ui',
        icon: 'assets/icons/components.svg',
      },
    ],
  },
];
